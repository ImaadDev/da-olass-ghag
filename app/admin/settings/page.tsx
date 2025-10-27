"use client";

import { useState } from "react";
import { Save, Settings, Users, Shield, Mail, Globe, Database, AlertTriangle } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // General Settings
    siteTitle: "My News Site",
    siteDescription: "Your trusted source for news and information",
    siteUrl: "https://mynewsite.com",
    logoUrl: "",

    // User Management
    allowRegistration: true,
    emailVerification: true,
    defaultUserRole: "subscriber",
    passwordMinLength: 8,

    // Content Settings
    postsPerPage: 10,
    commentsEnabled: true,
    commentApproval: false,
    maxFileSize: 10,

    // System Settings
    maintenanceMode: false,
    debugMode: false,
    timezone: "UTC",

    // Email Settings
    smtpHost: "",
    smtpPort: 587,
    smtpUser: "",
    smtpPassword: "",
    fromEmail: "noreply@mynewsite.com",

    // SEO Settings
    metaDescription: "",
    googleAnalyticsId: "",
    facebookPixelId: "",
  });

  const [activeTab, setActiveTab] = useState("general");
  const [saveMessage, setSaveMessage] = useState("");

  const handleSave = () => {
    // Simulate saving settings
    setSaveMessage("Settings saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const tabs = [
    { id: "general", name: "General", icon: Settings },
    { id: "users", name: "Users", icon: Users },
    { id: "content", name: "Content", icon: Database },
    { id: "system", name: "System", icon: Shield },
    { id: "email", name: "Email", icon: Mail },
    { id: "seo", name: "SEO", icon: Globe },
  ];

  return (
    <div className="bg-gray-50 p-4 md:p-6 lg:p-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-black tracking-tight">Settings</h1>
              <p className="text-gray-500 mt-1 text-sm md:text-base">Configure your application settings</p>
            </div>
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm md:text-base w-full sm:w-auto"
            >
              <Save className="w-4 h-4 md:w-5 md:h-5" />
              Save Settings
            </button>
          </div>

          {saveMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              {saveMessage}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-1 p-2" aria-label="Tabs">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-red-100 text-red-700 border border-red-200"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 md:p-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">General Settings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.siteTitle}
                        onChange={(e) => updateSetting("siteTitle", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site URL</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.siteUrl}
                        onChange={(e) => updateSetting("siteUrl", e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                      <textarea
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-24"
                        value={settings.siteDescription}
                        onChange={(e) => updateSetting("siteDescription", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                      <input
                        type="url"
                        placeholder="https://example.com/logo.png"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.logoUrl}
                        onChange={(e) => updateSetting("logoUrl", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* User Management Settings */}
              {activeTab === "users" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">User Management</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default User Role</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.defaultUserRole}
                        onChange={(e) => updateSetting("defaultUserRole", e.target.value)}
                      >
                        <option value="subscriber">Subscriber</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Password Length</label>
                      <input
                        type="number"
                        min="6"
                        max="20"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.passwordMinLength}
                        onChange={(e) => updateSetting("passwordMinLength", parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="allowRegistration"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.allowRegistration}
                        onChange={(e) => updateSetting("allowRegistration", e.target.checked)}
                      />
                      <label htmlFor="allowRegistration" className="ml-3 text-sm font-medium text-gray-700">
                        Allow user registration
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="emailVerification"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.emailVerification}
                        onChange={(e) => updateSetting("emailVerification", e.target.checked)}
                      />
                      <label htmlFor="emailVerification" className="ml-3 text-sm font-medium text-gray-700">
                        Require email verification
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Settings */}
              {activeTab === "content" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Content Settings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Posts Per Page</label>
                      <input
                        type="number"
                        min="5"
                        max="50"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.postsPerPage}
                        onChange={(e) => updateSetting("postsPerPage", parseInt(e.target.value))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Max File Size (MB)</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.maxFileSize}
                        onChange={(e) => updateSetting("maxFileSize", parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="commentsEnabled"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.commentsEnabled}
                        onChange={(e) => updateSetting("commentsEnabled", e.target.checked)}
                      />
                      <label htmlFor="commentsEnabled" className="ml-3 text-sm font-medium text-gray-700">
                        Enable comments on posts
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="commentApproval"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.commentApproval}
                        onChange={(e) => updateSetting("commentApproval", e.target.checked)}
                      />
                      <label htmlFor="commentApproval" className="ml-3 text-sm font-medium text-gray-700">
                        Require comment approval
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* System Settings */}
              {activeTab === "system" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">System Settings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.timezone}
                        onChange={(e) => updateSetting("timezone", e.target.value)}
                      >
                        <option value="UTC">UTC</option>
                        <option value="EST">Eastern Time</option>
                        <option value="PST">Pacific Time</option>
                        <option value="GMT">Greenwich Mean Time</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maintenanceMode"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.maintenanceMode}
                        onChange={(e) => updateSetting("maintenanceMode", e.target.checked)}
                      />
                      <label htmlFor="maintenanceMode" className="ml-3 text-sm font-medium text-gray-700 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Maintenance Mode
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="debugMode"
                        className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-600"
                        checked={settings.debugMode}
                        onChange={(e) => updateSetting("debugMode", e.target.checked)}
                      />
                      <label htmlFor="debugMode" className="ml-3 text-sm font-medium text-gray-700">
                        Debug Mode
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Settings */}
              {activeTab === "email" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Email Configuration</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                      <input
                        type="text"
                        placeholder="smtp.example.com"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.smtpHost}
                        onChange={(e) => updateSetting("smtpHost", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                      <input
                        type="number"
                        placeholder="587"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.smtpPort}
                        onChange={(e) => updateSetting("smtpPort", parseInt(e.target.value))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.smtpUser}
                        onChange={(e) => updateSetting("smtpUser", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.smtpPassword}
                        onChange={(e) => updateSetting("smtpPassword", e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                      <input
                        type="email"
                        placeholder="noreply@yoursite.com"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.fromEmail}
                        onChange={(e) => updateSetting("fromEmail", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SEO Settings */}
              {activeTab === "seo" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">SEO & Analytics</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
                      <input
                        type="text"
                        placeholder="GA_MEASUREMENT_ID"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.googleAnalyticsId}
                        onChange={(e) => updateSetting("googleAnalyticsId", e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Pixel ID</label>
                      <input
                        type="text"
                        placeholder="YOUR_PIXEL_ID"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                        value={settings.facebookPixelId}
                        onChange={(e) => updateSetting("facebookPixelId", e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                      <textarea
                        placeholder="Brief description for search engines"
                        className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 focus:outline-none transition-colors min-h-24"
                        value={settings.metaDescription}
                        onChange={(e) => updateSetting("metaDescription", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
