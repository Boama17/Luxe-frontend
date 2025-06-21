"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import {
  LayoutDashboard,
  Home,
  Users,
  MessageSquare,
  Settings,
  TrendingUp,
  Plus,
  Search,
  MoreVertical,
  Eye,
  Bell,
  User,
  LogOut,
  DollarSign,
  MapPin,
  Building,
  UserCheck,
  MessageCircle,
  CheckCircle,
  X,
  Save
} from 'lucide-react';
import { fetchProperties } from "@/lib/properties"; // <-- Import fetchProperties
import Sidebar from "./components/sidebar"
import Header from './components/header';
import StatCard from "./components/StatCard";
import statCards from "./data/statCardsData";
import PropertyCard from "./components/PropertyCard";

export default function RealtyAdminDashboard() {
  // State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [properties, setProperties] = useState<any[]>([]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Caleb Asiedu",
      email: "caleb005@gmail.com",
      role: "buyer",
      status: "active",
      joinDate: "2024-01-15",
      properties: 3
    },
    {
      id: 2,
      name: "Boama David",
      email: "boamadavid7@gmail.com",
      role: "agent",
      status: "active",
      joinDate: "2024-01-10",
      properties: 12
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike23@yahoo.com",
      role: "buyer",
      status: "inactive",
      joinDate: "2024-01-20",
      properties: 0
    }
  ]);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Property form state
  const [propertyForm, setPropertyForm] = useState({
    title: '',
    price: '',
    area: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    description: '',
    imageUrl: '',
    status: 'active',
    agent: 'Admin User',
  });

  // User form state (unchanged)
  const [userForm, setUserForm] = useState({
    name: '',
    email: '',
    role: 'buyer',
    status: 'active',
    properties: 0,
  });

  // Fetch properties from /lib/properties.ts
  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  // Filtered and searched properties
  const filteredProperties = properties.filter((p) => {
    const matchesStatus = filterStatus === 'all' || p.status === filterStatus;
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Handlers for property form
  const handlePropertyInput = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setPropertyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProperty = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newProperty = {
      ...propertyForm,
      id: Date.now(),
      price: Number(propertyForm.price),
      area: Number(propertyForm.area),
      bedrooms: Number(propertyForm.bedrooms),
      bathrooms: Number(propertyForm.bathrooms),
      views: 0,
      inquiries: 0,
      dateAdded: new Date().toISOString().slice(0, 10),
      imageUrl: propertyForm.imageUrl || "/api/placeholder/300/200",
      status: propertyForm.status,
      agent: propertyForm.agent,
    };
    setProperties([newProperty, ...properties]);
    setShowPropertyModal(false);
    setPropertyForm({
      title: '',
      price: '',
      area: '',
      location: '',
      bedrooms: '',
      bathrooms: '',
      description: '',
      imageUrl: '',
      status: 'active',
      agent: 'Admin User',
    });
  };

  // Handlers for user form (unchanged)
  const handleUserInput = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const newUser = {
      ...userForm,
      id: Date.now(),
      properties: Number(userForm.properties),
      joinDate: new Date().toISOString().slice(0, 10),
    };
    setUsers([newUser, ...users]);
    setShowUserModal(false);
    setUserForm({
      name: '',
      email: '',
      role: 'buyer',
      status: 'active',
      properties: 0,
    });
  };

  // Property Modal (update imageUrl field)
  const PropertyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add New Property</h2>
          <button
            onClick={() => setShowPropertyModal(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form className="p-6" onSubmit={handleAddProperty}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              name="title"
              value={propertyForm.title}
              onChange={handlePropertyInput}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter property title"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (₵)</label>
              <input
                name="price"
                value={propertyForm.price}
                onChange={handlePropertyInput}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
              <input
                name="area"
                value={propertyForm.area}
                onChange={handlePropertyInput}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              name="location"
              value={propertyForm.location}
              onChange={handlePropertyInput}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter location"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
              <input
                name="bedrooms"
                value={propertyForm.bedrooms}
                onChange={handlePropertyInput}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
              <input
                name="bathrooms"
                value={propertyForm.bathrooms}
                onChange={handlePropertyInput}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={propertyForm.description}
              onChange={handlePropertyInput}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter property description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
            <input
              name="imageUrl"
              value={propertyForm.imageUrl}
              onChange={handlePropertyInput}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Paste image URL or leave blank"
            />
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setShowPropertyModal(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // User Modal
  const UserModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Add New User</h2>
          <button
            onClick={() => setShowUserModal(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form className="p-6" onSubmit={handleAddUser}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              name="name"
              value={userForm.name}
              onChange={handleUserInput}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              name="email"
              value={userForm.email}
              onChange={handleUserInput}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              name="role"
              value={userForm.role}
              onChange={handleUserInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="buyer">Buyer</option>
              <option value="agent">Agent</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              name="status"
              value={userForm.status}
              onChange={handleUserInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Properties</label>
            <input
              name="properties"
              value={userForm.properties}
              onChange={handleUserInput}
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0"
              min={0}
            />
          </div>
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setShowUserModal(false)}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Stat cards data
  const statCardsData = [
    {
      title: 'Total Properties',
      value: 156,
      change: '+12%',
      icon: Building,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Active Listings',
      value: 134,
      change: '+8%',
      icon: Home,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      title: 'Total Users',
      value: 1250,
      change: '+24%',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      title: 'Monthly Revenue',
      value: `₵${(24500000 / 1000000).toFixed(1)}M`,
      change: '+15%',
      icon: DollarSign,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];



  interface Property {
    id: number;
    title: string;
    location: string;
    price: number;
    status: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    agent: string;
    dateAdded: string;
    views: number;
    inquiries: number;
  }

  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: string;
    joinDate: string;
    properties: number;
  }

  const UserRow = ({ user }: { user: User }) => (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-gray-500 text-sm">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          user.role === 'agent' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
        }`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {user.joinDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {user.properties}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
        <button className="text-red-600 hover:text-red-900">Delete</button>
      </td>
    </tr>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statCards.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-4">Recent Properties</h3>
                  <div className="space-y-4">
                    {properties.slice(0, 3).map(property => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-6">
                  <h3 className="text-lg font-semibold text-emerald-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowPropertyModal(true)}
                      className="w-full flex items-center gap-3 p-3 text-left bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 font-medium"
                    >
                      <Plus className="w-5 h-5" />
                      Add New Property
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-left bg-yellow-50 text-yellow-800 rounded-xl hover:bg-yellow-100 font-medium">
                      <UserCheck className="w-5 h-5" />
                      Approve Agents
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-left bg-green-50 text-green-800 rounded-xl hover:bg-green-100 font-medium">
                      <MessageCircle className="w-5 h-5" />
                      View Messages
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'properties':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">Properties</h2>
                <p className="text-emerald-700">Manage all property listings</p>
              </div>
              <button
                onClick={() => setShowPropertyModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Property
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-transparent bg-white"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-transparent bg-white"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-emerald-900">Users</h2>
                <p className="text-emerald-700">Manage users and agents</p>
              </div>
              <button
                onClick={() => setShowUserModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 font-medium"
              >
                <Plus className="w-4 h-4" />
                Add User
              </button>
            </div>

            {/* Users Table */}
            <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 overflow-hidden">
              <table className="min-w-full divide-y divide-emerald-100">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Properties
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-emerald-50">
                  {users.map(user => (
                    <UserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
            <MessageSquare className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Messages</h3>
            <p className="text-emerald-700">Message management coming soon</p>
          </div>
        );

      case 'analytics':
        return (
          <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
            <TrendingUp className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Analytics</h3>
            <p className="text-emerald-700">Analytics dashboard coming soon</p>
          </div>
        );

      case 'settings':
        return (
          <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
            <Settings className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold text-emerald-900 mb-2">Settings</h3>
            <p className="text-emerald-700">Settings panel coming soon</p>
          </div>
        );

      default:
        return null;
    }
  };

  // --- STYLED ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-green-100 font-[Poppins-regular] flex">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Main Content */}
      <div className="flex-1 ml-64 min-h-screen flex flex-col">
        {/* Header */}
        <Header activeTab={activeTab} />

        {/* Page Content */}
        <main className="flex-1 p-8 bg-transparent">
          {/* --- Dashboard --- */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {statCards.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-8">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-4">Recent Properties</h3>
                    <div className="space-y-4">
                      {properties.slice(0, 3).map(property => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-8">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => setShowPropertyModal(true)}
                        className="w-full flex items-center gap-3 p-3 text-left bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 font-medium"
                      >
                        <Plus className="w-5 h-5" />
                        Add New Property
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 text-left bg-yellow-50 text-yellow-800 rounded-xl hover:bg-yellow-100 font-medium">
                        <UserCheck className="w-5 h-5" />
                        Approve Agents
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 text-left bg-green-50 text-green-800 rounded-xl hover:bg-green-100 font-medium">
                        <MessageCircle className="w-5 h-5" />
                        View Messages
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- Properties Tab --- */}
          {activeTab === 'properties' && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">Properties</h2>
                  <p className="text-emerald-700">Manage all property listings</p>
                </div>
                <button
                  onClick={() => setShowPropertyModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add Property
                </button>
              </div>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-transparent bg-white"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:border-transparent bg-white"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              {/* Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}

          {/* --- Users Tab --- */}
          {activeTab === 'users' && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-900">Users</h2>
                  <p className="text-emerald-700">Manage users and agents</p>
                </div>
                <button
                  onClick={() => setShowUserModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 font-medium"
                >
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>
              {/* Users Table */}
              <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 overflow-hidden">
                <table className="min-w-full divide-y divide-emerald-100">
                  <thead className="bg-emerald-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Properties
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-emerald-50">
                    {users.map(user => (
                      <UserRow key={user.id} user={user} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* --- Messages Tab --- */}
          {activeTab === 'messages' && (
            <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
              <MessageSquare className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Messages</h3>
              <p className="text-emerald-700">Message management coming soon</p>
            </div>
          )}

          {/* --- Analytics Tab --- */}
          {activeTab === 'analytics' && (
            <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
              <TrendingUp className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Analytics</h3>
              <p className="text-emerald-700">Analytics dashboard coming soon</p>
            </div>
          )}

          {/* --- Settings Tab --- */}
          {activeTab === 'settings' && (
            <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-12 flex flex-col items-center justify-center min-h-[300px]">
              <Settings className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Settings</h3>
              <p className="text-emerald-700">Settings panel coming soon</p>
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {showPropertyModal && <PropertyModal />}
      {showUserModal && <UserModal />}
    </div>
  );
}