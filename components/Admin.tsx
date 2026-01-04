
import React, { useState } from 'react';
import { Project } from '../types';

interface AdminProps {
  projects: Project[];
  onUpdate: (projects: Project[]) => void;
  onClose: () => void;
}

const Admin: React.FC<AdminProps> = ({ projects, onUpdate, onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({});

  // File to Base64 helper
  const toBase64 = (file: File): Promise<string> => 
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: 'thumbnailUrl' | 'sketchUrl') => {
    if (e.target.files && e.target.files[0]) {
      const base64 = await toBase64(e.target.files[0]);
      setFormData({ ...formData, [field]: base64 });
    }
  };

  const handleMultipleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Fix: Cast Array.from(e.target.files) to File[] to resolve TS 'unknown' error
      const filesArray = Array.from(e.target.files) as File[];
      const base64s = await Promise.all(filesArray.map(file => toBase64(file)));
      setFormData({ 
        ...formData, 
        imageUrls: [...(formData.imageUrls || []), ...base64s] 
      });
    }
  };

  const removeImageUrl = (index: number) => {
    const newUrls = [...(formData.imageUrls || [])];
    newUrls.splice(index, 1);
    setFormData({ ...formData, imageUrls: newUrls });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '3066') {
      setIsAuthorized(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData(project);
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({
      brandName: '',
      category: '',
      keywords: [],
      description: '',
      background: '',
      problem: '',
      concept: '',
      feedback: '',
      isFeatured: false,
      thumbnailUrl: '',
      imageUrls: [],
      sketchUrl: ''
    });
  };

  const handleSave = () => {
    if (editingId === 'new') {
      const newProject = { 
        ...formData, 
        id: Date.now().toString() 
      } as Project;
      onUpdate([...projects, newProject]);
    } else {
      onUpdate(projects.map(p => p.id === editingId ? { ...p, ...formData } as Project : p));
    }
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onUpdate(projects.filter(p => p.id !== id));
    }
  };

  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 z-[110] glass-morphism flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-black/5">
          <h2 className="text-2xl font-serif mb-6 text-center">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className="w-full border border-black/10 px-4 py-3 rounded-xl focus:outline-none focus:border-black"
            />
            <div className="flex gap-2">
              <button type="submit" className="flex-1 bg-black text-white py-3 rounded-xl font-bold">로그인</button>
              <button onClick={onClose} className="flex-1 border border-black/10 py-3 rounded-xl font-bold">닫기</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] bg-white overflow-y-auto p-6 md:p-12">
      <div className="max-w-5xl mx-auto pb-24">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif">Project Management</h1>
          <div className="flex gap-4">
            <button onClick={handleAddNew} className="bg-black text-white px-6 py-2 rounded-full font-bold">Add New</button>
            <button onClick={onClose} className="border border-black px-6 py-2 rounded-full font-bold">Close</button>
          </div>
        </div>

        {editingId ? (
          <div className="bg-gray-50 p-8 rounded-3xl border border-black/5 space-y-10">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Brand Name</label>
                <input 
                  value={formData.brandName} 
                  onChange={e => setFormData({...formData, brandName: e.target.value})}
                  className="w-full p-4 rounded-xl border border-black/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Category</label>
                <input 
                  value={formData.category} 
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="w-full p-4 rounded-xl border border-black/10"
                />
              </div>
            </div>

            {/* Media Upload Section */}
            <div className="space-y-8">
              <h3 className="text-xl font-serif border-b pb-2">Media & Images</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thumbnail */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Thumbnail Image</label>
                  <div className="aspect-square bg-white border border-dashed border-black/20 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                    {formData.thumbnailUrl ? (
                      <img src={formData.thumbnailUrl} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400 text-sm">No Image</span>
                    )}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={e => handleFileChange(e, 'thumbnailUrl')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 italic text-center">Click to upload main card image</p>
                </div>

                {/* Sketch */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Process/Sketch Image</label>
                  <div className="aspect-square bg-white border border-dashed border-black/20 rounded-2xl overflow-hidden flex items-center justify-center relative">
                    {formData.sketchUrl ? (
                      <img src={formData.sketchUrl} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400 text-sm">No Image</span>
                    )}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={e => handleFileChange(e, 'sketchUrl')}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 italic text-center">Click to upload design process image</p>
                </div>
              </div>

              {/* Multiple Mockups */}
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Case Study Images (Multiple)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.imageUrls?.map((url, idx) => (
                    <div key={idx} className="aspect-square bg-white border rounded-xl overflow-hidden relative group">
                      <img src={url} className="w-full h-full object-cover" />
                      <button 
                        onClick={() => removeImageUrl(idx)}
                        className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-black/10 rounded-xl flex items-center justify-center relative hover:bg-black/5 transition-colors">
                    <span className="text-2xl text-gray-300">+</span>
                    <input 
                      type="file" 
                      multiple 
                      accept="image/*"
                      onChange={handleMultipleFilesChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 italic">You can upload multiple high-resolution mockups for the case study.</p>
              </div>
            </div>

            {/* Description Fields */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif border-b pb-2">Content Detail</h3>
              <textarea 
                placeholder="Short Overview Description" 
                value={formData.description} 
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full p-4 rounded-xl border border-black/10 h-24"
              />
              <textarea 
                placeholder="Brand Background" 
                value={formData.background} 
                onChange={e => setFormData({...formData, background: e.target.value})}
                className="w-full p-4 rounded-xl border border-black/10 h-32"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <textarea 
                  placeholder="Problem" 
                  value={formData.problem} 
                  onChange={e => setFormData({...formData, problem: e.target.value})}
                  className="w-full p-4 rounded-xl border border-black/10 h-32"
                />
                <textarea 
                  placeholder="Concept Detail" 
                  value={formData.concept} 
                  onChange={e => setFormData({...formData, concept: e.target.value})}
                  className="w-full p-4 rounded-xl border border-black/10 h-32"
                />
              </div>
              <textarea 
                placeholder="Client Feedback" 
                value={formData.feedback} 
                onChange={e => setFormData({...formData, feedback: e.target.value})}
                className="w-full p-4 rounded-xl border border-black/10 h-24"
              />
            </div>

            <div className="flex items-center gap-2 py-4">
               <input 
                type="checkbox" 
                id="feat"
                checked={formData.isFeatured} 
                onChange={e => setFormData({...formData, isFeatured: e.target.checked})}
                className="w-5 h-5 accent-black"
               />
               <label htmlFor="feat" className="font-bold">Display in Featured Section</label>
            </div>

            <div className="flex gap-4 pt-8 border-t border-black/10">
              <button onClick={handleSave} className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-lg">Save Project</button>
              <button onClick={() => setEditingId(null)} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold text-lg">Cancel</button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projects.map(p => (
              <div key={p.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-black/5 hover:border-black/20 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border bg-white">
                    <img src={p.thumbnailUrl || p.imageUrls?.[0]} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{p.brandName}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 uppercase tracking-widest">{p.category}</span>
                      {p.isFeatured && <span className="px-2 py-0.5 bg-black text-white text-[10px] rounded-full">FEATURED</span>}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit(p)} className="px-6 py-2 border border-black rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-bold hover:bg-red-600 transition-all">Delete</button>
                </div>
              </div>
            ))}
            {projects.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-black/10">
                <p className="text-gray-400">등록된 프로젝트가 없습니다.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
