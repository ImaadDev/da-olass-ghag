"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, X, Upload, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { uploadImage } from "@/lib/uploadImage";

interface News {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  summary?: string;
  image_url?: string[]; // array of URLs
  published: boolean;
  created_at: string;
  featured?: boolean;
  slug?: string;
  read_time?: number;
  views?: number;
  published_at?: string | null;
}

function Modal({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex justify-between items-center">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}

export default function AdminNews() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    category: "",
    author: "",
    image_url: "", //string for form input, will be converted to array on submit
    published: false,
    featured: false,
  });

  useEffect(() => {
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("Supabase ANON KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  }, []);

  // 🔹 Fetch all news
  const fetchNews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error("Error fetching news:", error);
    else setNews(data || []);
    console.log("data", data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleAddNews = async () => {
    // Basic validation
    if (!formData.title.trim() || !formData.category) {
      alert("Please fill in the title and select a category");
      return;
    }

    // Convert image_url string to array if user entered comma-separated URLs
    const imagesArray = Array.isArray(formData.image_url)
      ? formData.image_url
      : formData.image_url.split(",").map((url: string) => url.trim()).filter(Boolean);

    const slug = formData.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, ""); // URL-friendly slug

    const newsToInsert = {
      title: formData.title,
      summary: formData.summary,
      content: formData.content,
      category: formData.category,
      author: formData.author,
      image_url: imagesArray,
      published_at: formData.published ? new Date().toISOString() : null,
      slug,
      read_time: Math.ceil(formData.content.split(" ").length / 200), // approx 200 words per min
      featured: formData.featured,
      published: formData.published,
      views: 0,
    };

    const { error } = await supabase.from("news").insert([newsToInsert]);
    if (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
      return;
    }
    await fetchNews();
    setAddModalOpen(false);
    setFormData({
      title: "",
      content: "",
      summary: "",
      category: "",
      author: "",
      image_url: "",
      published: false,
      featured: false,
    });
  };

  // 🔹 Edit
  const handleEditNews = async () => {
    console.log("🔧 handleEditNews called");
    console.log("Selected news:", selectedNews);
    console.log("Form data:", formData);

    if (!selectedNews) {
      console.error("❌ No selected news article");
      alert("No article selected for editing");
      return;
    }

    try {
      const imagesArray = formData.image_url
        ? formData.image_url.split(",").map((url) => url.trim()).filter(Boolean)
        : [];

      const slug = formData.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");

      console.log("Image array:", imagesArray);
      console.log("Generated slug:", slug);

      const newsToUpdate: any = {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        image_url: imagesArray,
        slug,
        read_time: Math.ceil(formData.content.split(" ").length / 200),
        featured: formData.featured,
        published: formData.published,
      };

      // Handle published_at logic carefully - published_at should never be null
      const publishedChanged = formData.published !== selectedNews.published;
      console.log("Published changed:", publishedChanged, "- From:", selectedNews.published, "To:", formData.published);

      if (publishedChanged) {
        if (formData.published && !selectedNews.published) {
          // Publishing an unpublished article - set published_at to now
          newsToUpdate.published_at = new Date().toISOString();
          console.log("Setting published_at to now (first time publishing):", newsToUpdate.published_at);
        }
        // When unpublishing, we don't change published_at, just keep the existing timestamp
        // This maintains the publication history while marking it as unpublished
      }

      console.log("🚀 Final update object:", newsToUpdate);
      console.log("Article ID:", selectedNews.id);

      const { data, error } = await supabase
        .from("news")
        .update(newsToUpdate)
        .eq("id", selectedNews.id);

      console.log("Supabase response - Data:", data, "Error:", error);

      if (error) {
        console.error("❌ Supabase update error:", error);
        console.error("Update data that failed:", newsToUpdate);
        alert(`Failed to update news: ${error.message}`);
        return;
      }

      console.log("✅ Update successful");
      await fetchNews();
      setEditModalOpen(false);
      alert("News article updated successfully!");

    } catch (err) {
      console.error("❌ Unexpected error in handleEditNews:", err);
      alert(`Unexpected error: ${err}`);
    }
  };

  // 🔹 Delete
  const handleDeleteNews = async () => {
    if (!selectedNews) return;
    const { error } = await supabase.from("news").delete().eq("id", selectedNews.id);
    if (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news");
      return;
    }
    await fetchNews();
    setDeleteModalOpen(false);
  };

  // 🔹 Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600">
        Loading news...
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
            News Management
          </h1>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            Create, edit, and manage news articles
          </p>
        </div>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm md:text-base w-full sm:w-auto"
          onClick={() => setAddModalOpen(true)}
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5" />
          Add News
        </button>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4">
        {news.length === 0 ? (
          <div className="bg-white border border-gray-200 p-8 text-center text-gray-500">
            No news articles found
          </div>
        ) : (
          news.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2 flex-1 mr-2">{item.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium shrink-0 ${item.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {item.published ? "Published" : "Draft"}
                  </span>
                </div>
                <div className="space-y-2 mb-3">
                  <p className="text-sm text-gray-600 line-clamp-2">{item.summary || item.content.slice(0, 100) + '...'}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    onClick={() => {
                      setSelectedNews(item);
                      setFormData({
                        title: item.title || "",
                        content: item.content || "",
                        summary: item.summary || "",
                        category: item.category || "",
                        author: item.author || "",
                        image_url: item.image_url ? item.image_url.join(", ") : "",
                        published: item.published || false,
                        featured: item.featured || false,
                      });
                      setEditModalOpen(true);
                    }}
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    className="flex items-center gap-1 px-3 py-1.5 text-xs bg-red-50 text-red-700 hover:bg-red-100 transition-colors"
                    onClick={() => {
                      setSelectedNews(item);
                      setDeleteModalOpen(true);
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="bg-white border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {news.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No news articles found
                  </td>
                </tr>
              ) : (
                news.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.author}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium ${
                          item.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => {
                            setSelectedNews(item);
                            setFormData({
                              title: item.title || "",
                              content: item.content || "",
                              summary: item.summary || "",
                              category: item.category || "",
                              author: item.author || "",
                              image_url: item.image_url ? item.image_url.join(", ") : "",
                              published: item.published || false,
                              featured: item.featured || false,
                            });
                            setEditModalOpen(true);
                          }}
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          className="text-gray-600 hover:text-red-600 transition-colors"
                          onClick={() => {
                            setSelectedNews(item);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {addModalOpen && (
        <Modal onClose={() => setAddModalOpen(false)} title="Add News Article">
          <NewsForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleAddNews}
            onCancel={() => setAddModalOpen(false)}
            actionLabel="Add Article"
          />
        </Modal>
      )}

      {editModalOpen && selectedNews && (
        <Modal onClose={() => setEditModalOpen(false)} title="Edit News Article">
          <NewsForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleEditNews}
            onCancel={() => setEditModalOpen(false)}
            actionLabel="Save Changes"
          />
        </Modal>
      )}

      {deleteModalOpen && selectedNews && (
        <Modal onClose={() => setDeleteModalOpen(false)} title="Delete Article">
          <div className="space-y-4">
            <p className="text-gray-700">
              Are you sure you want to delete{" "}
              <strong className="text-gray-900">{selectedNews.title}</strong>? This
              action cannot be undone.
            </p>
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                onClick={handleDeleteNews}
              >
                Delete Article
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function NewsForm({
  formData,
  setFormData,
  onSubmit,
  onCancel,
  actionLabel,
}: any) {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 4) {
      alert("You can only upload up to 4 images");
      return;
    }
    setImageFiles(files);
    console.log("Selected files:", files.map(f => f.name));
  };

  const handleUploadImages = async () => {
    if (imageFiles.length === 0) {
      alert("Please select images first");
      return;
    }

    setUploadingImages(true);
    setUploadProgress("Uploading...");

    try {
      const uploadPromises = imageFiles.map(async (file) => {
        const result = await uploadImage(file);
        if (!result) {
          throw new Error(`Failed to upload ${file.name}`);
        }
        return result;
      });

      const uploadedUrls = await Promise.all(uploadPromises);
      const newUrls = uploadedUrls.join(", ");

      // Append to existing URLs if any
      const existingUrls = formData.image_url || "";
      const updatedUrls = existingUrls ? `${existingUrls}, ${newUrls}` : newUrls;

      setFormData({ ...formData, image_url: updatedUrls.trim() });
      setImageFiles([]);
      setUploadProgress("Upload complete!");
      console.log("Images uploaded successfully:", uploadedUrls);

      // Reset success message after 3 seconds
      setTimeout(() => setUploadProgress(""), 3000);

    } catch (error) {
      console.error("Upload error:", error);
      setUploadProgress("Upload failed");
      alert("Failed to upload one or more images. Please try again.");
    } finally {
      setUploadingImages(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-16"
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
        <textarea
          className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-32"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="">Select a category</option>
            <option value="pakistan">Pakistan</option>
            <option value="world">World</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="showbiz">Showbiz</option>
            <option value="climate">Climate</option>
            <option value="fact checker">Fact Checker</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Author
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          />
        </div>
      </div>

      {/* Image Upload Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images (Max 4)</label>
        <div className="space-y-3">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
          />
          {imageFiles.length > 0 && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Images:</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {imageFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-3 py-2 rounded border text-xs">
                    <ImageIcon className="w-4 h-4" />
                    <span className="truncate max-w-20">{file.name}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleUploadImages}
                disabled={uploadingImages}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload className="w-4 h-4" />
                {uploadingImages ? "Uploading..." : "Upload Images"}
              </button>
              {uploadProgress && (
                <p className={`text-sm mt-2 ${uploadProgress === "Upload failed" ? "text-red-600" : "text-green-600"}`}>
                  {uploadProgress}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

     

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
            checked={formData.published}
            onChange={(e) =>
              setFormData({ ...formData, published: e.target.checked })
            }
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">
            Publish immediately
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
            checked={formData.featured}
            onChange={(e) =>
              setFormData({ ...formData, featured: e.target.checked })
            }
          />
          <label htmlFor="featured" className="text-sm font-medium text-gray-700">
            Featured article
          </label>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors order-2 sm:order-1"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors order-1 sm:order-2"
          onClick={onSubmit}
        >
          {actionLabel}
        </button>
      </div>
    </form>
  );
}
