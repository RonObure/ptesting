// app/dashboard/student/page.tsx
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';


export default function StudentDashboard() {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <div className="flex-1 overflow-y-auto p-6">
          {/* Progress Chart */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>
         
          </div>
          
          {/* Other dashboard content */}
        </div>
      </div>
    </div>
  );
}