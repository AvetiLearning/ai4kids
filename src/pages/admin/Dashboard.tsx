const Dashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-gray-500 text-sm font-medium uppercase">Total Assets</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">12</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-gray-500 text-sm font-medium uppercase">Recent Uploads</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">4</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-gray-500 text-sm font-medium uppercase">Storage Used</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">45 MB</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
