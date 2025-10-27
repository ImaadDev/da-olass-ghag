"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

interface News {
  id: number;
  title: string;
  content: string;
  category: string;
  author: string;
  image_url?: string;
  published: boolean;
  created_at: string;
}

function Modal({ onClose, title, children }: { onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}

export default function AdminNews() {
  const [news, setNews] = useState<News[]>([
    {
      id: 1,
      title: "First News",
      content: "This is the first news content.",
      category: "World",
      author: "Admin",
      image_url: "",
      published: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Second News",
      content: "This is the second news content.",
      category: "Business",
      author: "Admin",
      image_url: "",
      published: false,
      created_at: new Date().toISOString(),
    },
  ]);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    image_url: "",
    published: false,
  });

  const handleAddNews = () => {
    const newNews: News = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      ...formData,
    };
    setNews([newNews, ...news]);
    setAddModalOpen(false);
    setFormData({ title: "", content: "", category: "", author: "", image_url: "", published: false });
  };

  const handleEditNews = () => {
    if (!selectedNews) return;
    setNews(
      news.map((n) => (n.id === selectedNews.id ? { ...n, ...formData } : n))
    );
    setEditModalOpen(false);
    setFormData({ title: "", content: "", category: "", author: "", image_url: "", published: false });
  };

  const handleDeleteNews = () => {
    if (!selectedNews) return;
    setNews(news.filter((n) => n.id !== selectedNews.id));
    setDeleteModalOpen(false);
  };

  return (
    <div className="">
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">News Management</h1>
              <p className="text-gray-500 mt-1 text-sm md:text-base">Create, edit, and manage news articles</p>
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
          <div className="block md:hidden">
            <div className="bg-white overflow-hidden">
              {news.length === 0 ? (
                <div className="px-4 py-12 text-center text-gray-500">No news articles found</div>
              ) : (
                news.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 last:border-b-0 p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2 flex-1 mr-2">{item.title}</h3>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full shrink-0 ${item.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {item.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <div><span className="font-medium">Category:</span> {item.category}</div>
                      <div><span className="font-medium">Author:</span> {item.author}</div>
                      <div><span className="font-medium">Date:</span> {new Date(item.created_at).toLocaleDateString()}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                        onClick={() => {
                          setSelectedNews(item);
                          setFormData({ ...item, image_url: item.image_url || "" });
                          setEditModalOpen(true);
                        }}
                      >
                        <Edit className="w-3 h-3" />
                        Edit
                      </button>
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 text-xs bg-red-50 text-red-700 rounded hover:bg-red-100 transition-colors"
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
                ))
              )}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="bg-white border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {news.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">No news articles found</td>
                    </tr>
                  ) : (
                    news.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.author}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-medium ${item.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {item.published ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{new Date(item.created_at).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-3">
                            <button
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => {
                                setSelectedNews(item);
                                setFormData({ ...item, image_url: item.image_url || "" });
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
        </div>
      </div>

      {addModalOpen && (
        <Modal onClose={() => setAddModalOpen(false)} title="Add News Article">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter article title"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                placeholder="Enter article content"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-32"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  placeholder="e.g., World, Business"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  placeholder="Author name"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published-add"
                className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              />
              <label htmlFor="published-add" className="text-sm font-medium text-gray-700">
                Publish immediately
              </label>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                onClick={handleAddNews}
              >
                Add Article
              </button>
            </div>
          </form>
        </Modal>
      )}

      {editModalOpen && selectedNews && (
        <Modal onClose={() => setEditModalOpen(false)} title="Edit News Article">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter article title"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                placeholder="Enter article content"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-32"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  placeholder="e.g., World, Business"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  placeholder="Author name"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published-edit"
                className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
              />
              <label htmlFor="published-edit" className="text-sm font-medium text-gray-700">
                Publish immediately
              </label>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
                onClick={handleEditNews}
              >
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {deleteModalOpen && selectedNews && (
        <Modal onClose={() => setDeleteModalOpen(false)} title="Delete Article">
          <div className="space-y-4">
            <p className="text-gray-700">
              Are you sure you want to delete <strong className="text-gray-900">{selectedNews.title}</strong>? This action cannot be undone.
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
