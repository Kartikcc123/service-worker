import HeroCarousel from '../components/HeroCarousel';
import LeadGenForm from '../components/LeadGenForm';
import CategoriesSection from '../components/CategoriesSection';
import WorkersSection from '../components/WorkersSection';
import ReviewsSection from '../components/ReviewsSection';

const ALL_SLIDES = [
  {
    id: 1,
    title: 'Search compare prices & book hotels',
    badge: 'GET BEST DEALS',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=1200&auto=format&fit=crop',
    color: 'from-[#8B4513]/90'
  },
  {
    id: 2,
    title: 'Top Rated Beauty Spas Near You',
    badge: 'RELAX TODAY',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    color: 'from-pink-900/90'
  },
  {
    id: 3,
    title: 'B2B Services & Quick Quotes',
    badge: 'EXPLORE NOW',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
    color: 'from-blue-900/90'
  },
  {
    id: 4,
    title: 'Find the Finest Real Estate Agents',
    badge: 'VIEW LISTINGS',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    color: 'from-violet-900/90'
  }
];

const Home = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-white pb-12">
        <div className="h-[240px] w-full overflow-hidden border-b border-slate-200/70 md:h-[300px]">
          <HeroCarousel slides={ALL_SLIDES} />
        </div>

        <div className="site-shell -mt-10 md:-mt-14">
          <LeadGenForm />
        </div>
      </section>

      <CategoriesSection />
      <WorkersSection selectedCategory={null} />
      <ReviewsSection />
    </div>
  );
};

export default Home;
