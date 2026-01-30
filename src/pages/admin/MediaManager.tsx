import { useState } from 'react';
import { Upload, Trash2, Link as LinkIcon } from 'lucide-react';

const MediaManager = () => {
    // Mock data for initial display
    const [assets, setAssets] = useState([
        { id: 1, name: 'hero-image.jpg', url: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5', type: 'image' },
        { id: 2, name: 'about-banner.png', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', type: 'image' },
        { id: 3, name: 'demo-video.mp4', url: '#', type: 'video' },
    ]);

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this asset?')) {
            setAssets(assets.filter(a => a.id !== id));
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Media Manager</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload New
                </button>
            </div>

            {/* Upload Area (Mock) */}
            <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 mb-8 flex flex-col items-center justify-center text-gray-500 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 mb-4 text-gray-400" />
                <p className="text-lg font-medium">Click or drag files to upload</p>
                <p className="text-sm mt-1">Supports JPG, PNG, MP4</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {assets.map((asset) => (
                    <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                        <div className="aspect-video bg-gray-100 relative">
                            {asset.type === 'image' ? (
                                <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <div className="text-center">
                                        <div className="font-bold text-lg">VIDEO</div>
                                        <div className="text-xs">{asset.name}</div>
                                    </div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                                <button className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-700" title="Copy Link">
                                    <LinkIcon className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleDelete(asset.id)}
                                    className="p-2 bg-white rounded-full hover:bg-red-50 text-red-600"
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div className="p-3">
                            <p className="text-sm font-medium text-gray-700 truncate" title={asset.name}>{asset.name}</p>
                            <p className="text-xs text-gray-500 uppercase mt-1">{asset.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaManager;
