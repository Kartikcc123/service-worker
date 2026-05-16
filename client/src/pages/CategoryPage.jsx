import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CategoryBannerAd from '../components/category/CategoryBannerAd';
import FilterBar from '../components/category/FilterBar';
import HorizontalWorkerCard from '../components/category/HorizontalWorkerCard';
import SidebarLeadForm from '../components/category/SidebarLeadForm';
import SidebarTopPicks from '../components/category/SidebarTopPicks';
import { useGlobalContext } from '../context/GlobalContext';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const { users } = useGlobalContext();

  // Filter workers based on category and active status
  const categoryWorkers = useMemo(() => {
    const activeProviders = users.filter(user => user.role === 'Provider' && user.status === 'Active');
    const workers = activeProviders.filter(
      w => w.category && w.category.toLowerCase() === decodedCategory.toLowerCase()
    );
    // If no workers match, fallback to returning top workers (for demo purposes)
    return workers.length > 0 ? workers : activeProviders.slice(0, 5);
  }, [decodedCategory, users]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <CategoryBannerAd />

      <div className="site-shell py-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <Link to="/" className="hover:text-blue-600">Bhilwara</Link>
          <ChevronRight size={12} />
          <span className="hover:text-blue-600 cursor-pointer">{decodedCategory} in Bhilwara</span>
          <ChevronRight size={12} />
          <span>14492+ Listings</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Popular {decodedCategory} in Bhilwara
        </h1>

        {/* Filter Bar */}
        <div className="mt-4 border-b border-slate-200 pb-4">
          <FilterBar />
        </div>

        {/* Main 2-Column Layout */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          
          {/* Left Column (Main List) */}
          <div className="flex-1 lg:w-2/3 xl:w-3/4">
            {categoryWorkers.map((worker) => (
              <HorizontalWorkerCard key={worker.id} worker={worker} />
            ))}
          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <SidebarLeadForm categoryName={decodedCategory} />
            <SidebarTopPicks categoryName={decodedCategory} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
