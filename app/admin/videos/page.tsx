"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, X, Play, Image } from "lucide-react";

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
  created_at: string;
  published: boolean;
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

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      title: "How to Create a React App",
      description: "Complete tutorial on creating modern React applications with best practices",
      thumbnail_url: "https://example.com/thumbnail1.jpg",
      video_url: "https://example.com/video1.mp4",
      published: true,
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Next.js 15 New Features",
      description: "Exploring the latest features and improvements in Next.js 15",
      thumbnail_url: "https://example.com/thumbnail2.jpg",
      video_url: "https://example.com/video2.mp4",
      published: false,
      created_at: new Date().toISOString(),
    },
  ]);

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnail_url: "",
    video_url: "",
    published: false,
  });

  const handleAddVideo = () => {
    const newVideo: Video = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      ...formData,
    };
    setVideos([newVideo, ...videos]);
    setAddModalOpen(false);
    setFormData({ title: "", description: "", thumbnail_url: "", video_url: "", published: false });
  };

  const handleEditVideo = () => {
    if (!selectedVideo) return;
    setVideos(
      videos.map((v) => (v.id === selectedVideo.id ? { ...v, ...formData } : v))
    );
    setEditModalOpen(false);
    setFormData({ title: "", description: "", thumbnail_url: "", video_url: "", published: false });
  };

  const handleDeleteVideo = () => {
    if (!selectedVideo) return;
    setVideos(videos.filter((v) => v.id !== selectedVideo.id));
    setDeleteModalOpen(false);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-6 lg:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-black tracking-tight">Video Management</h1>
              <p className="text-gray-500 mt-1 text-sm md:text-base">Create, edit, and manage video content</p>
            </div>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm md:text-base w-full sm:w-auto"
              onClick={() => setAddModalOpen(true)}
            >
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
              Add Video
            </button>
          </div>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-4">
            {videos.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500">
                No videos found
              </div>
            ) : (
              videos.map((video) => (
                <div key={video.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex gap-4 p-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      {video.thumbnail_url ? (
                        <img
                          src={video.thumbnail_url}
                          alt={video.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                          <Image className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 flex-1 mr-2">{video.title}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full shrink-0 ${video.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {video.published ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{video.description}</p>
                      <div className="flex gap-2">
                        <button
                          className="flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                          onClick={() => {
                            setSelectedVideo(video);
                            setFormData({ ...video, thumbnail_url: video.thumbnail_url || "", video_url: video.video_url || "" });
                            setEditModalOpen(true);
                          }}
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        <button
                          className="flex items-center gap-1 px-3 py-1.5 text-xs bg-red-50 text-red-700 rounded hover:bg-red-100 transition-colors"
                          onClick={() => {
                            setSelectedVideo(video);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Video</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {videos.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No videos found</td>
                    </tr>
                  ) : (
                    videos.map((video) => (
                      <tr key={video.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="w-16 h-10">
                            {video.thumbnail_url ? (
                              <img
                                src={video.thumbnail_url}
                                alt={video.title}
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                                <Image className="w-4 h-4 text-gray-400" />
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{video.title}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{video.description}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex px-3 py-1 text-xs font-medium ${video.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {video.published ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-3">
                            <button
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => {
                                setSelectedVideo(video);
                                setFormData({ ...video, thumbnail_url: video.thumbnail_url || "", video_url: video.video_url || "" });
                                setEditModalOpen(true);
                              }}
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button
                              className="text-gray-600 hover:text-red-600 transition-colors"
                              onClick={() => {
                                setSelectedVideo(video);
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
        <Modal onClose={() => setAddModalOpen(false)} title="Add Video">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter video title"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter video description"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-24"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/video.mp4"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.video_url}
                  onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/thumbnail.jpg"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.thumbnail_url}
                  onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                />
              </div>
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
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors order-2 sm:order-1"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors order-1 sm:order-2"
                onClick={handleAddVideo}
              >
                Add Video
              </button>
            </div>
          </form>
        </Modal>
      )}

      {editModalOpen && selectedVideo && (
        <Modal onClose={() => setEditModalOpen(false)} title="Edit Video">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                placeholder="Enter video title"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter video description"
                className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-24"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Video URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/video.mp4"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.video_url}
                  onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
                <input
                  type="url"
                  placeholder="https://example.com/thumbnail.jpg"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  value={formData.thumbnail_url}
                  onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                />
              </div>
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
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors order-2 sm:order-1"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors order-1 sm:order-2"
                onClick={handleEditVideo}
              >
                Save Changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {deleteModalOpen && selectedVideo && (
        <Modal onClose={() => setDeleteModalOpen(false)} title="Delete Video">
          <div className="space-y-4">
            <p className="text-gray-700">
              Are you sure you want to delete <strong className="text-gray-900">{selectedVideo.title}</strong>? This action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-4 border-t border-gray-200">
              <button
                className="px-4 py-2 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors order-2 sm:order-1"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors order-1 sm:order-2"
                onClick={handleDeleteVideo}
              >
                Delete Video
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
