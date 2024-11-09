import React, { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => (
  <div className={`w-20 h-20 ${className || ''}`}>
    <svg viewBox="0 0 1000 1000" className="w-full h-full">
      <circle cx="400" cy="500" r="300" fill="none" stroke="black" strokeWidth="2"/>
      <circle cx="600" cy="500" r="300" fill="none" stroke="black" strokeWidth="2"/>
      <text 
        x="500" 
        y="525" 
        textAnchor="middle" 
        className="text-4xl font-serif"
        style={{ fontFamily: 'serif' }}
      >
        PRXM
      </text>
    </svg>
  </div>
);

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-white text-black">
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-5xl mx-auto px-6 py-2">
        <a href="/" className="inline-block">
          <Logo />
        </a>
      </div>
    </nav>
    <main className="pt-24 pb-20">
      {children}
    </main>
  </div>
);

interface Item {
  title: string;
  description: string;
  link: string;
}

interface CategoryCardProps {
  title: string;
  description: string;
  items: Item[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, items }) => (
  <div className="p-6 border border-gray-200 rounded-lg">
    <h2 className="text-2xl font-medium mb-2">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="space-y-4">
      {items.map((item, i) => (
        <a 
          key={i}
          href={item.link} 
          className="block p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Home: React.FC = () => {
  const webApps: Item[] = [
    { 
      title: "Monroe™", 
      description: "Create digital pop art", 
      link: "https://www.monroe.art" 
    },
    { 
      title: "Meme Maker", 
      description: "Make and share memes easily", 
      link: "https://www.makememes.co" 
    },
    { 
      title: "Code Tutor", 
      description: "Learn what your ai-composed code does", 
      link: "https://www.codeclarity.app" 
    }
  ];

  const communities: Item[] = [
    { 
      title: "Higher", 
      description: "27,000 members. 100,000+ holders", 
      link: "https://www.aimhigher.net" 
    },
    { 
      title: "Someone Build", 
      description: "4,000+ members sharing business ideas", 
      link: "https://warpcast.com/~/channel/someone-build" 
    },
    { 
      title: "The Walking Club", 
      description: "60 members that love walking", 
      link: "https://warpcast.com/~/channel/thewalkingclub" 
    }
  ];

  const papers: Item[] = [
    { 
      title: "Hypercultures", 
      description: "Breakout paper on digital culture", 
      link: "https://lght.mirror.xyz/Av_4Vx1U9jDYgDzdrfWQD3FKuXUbMpQ9h5n-KlFz3KQ" 
    },
    { 
      title: "Memetics", 
      description: "Market research on novel meme primitives", 
      link: "https://lght.mirror.xyz/PyVamFjuDpQIOKMe9jB4JDSlJu11go14L-PbCIUlfSg" 
    },
    { 
      title: "Founding Higher Network", 
      description: "Initial accounting of the experiment", 
      link: "https://lght.mirror.xyz/sj2ZD56v80Dk51VEVFrtoK63eBMQMfo0e6p0IDQQRog" 
    },
    { 
      title: "Left Curving DAOs I & II", 
      description: "Proposing an innovation on global-scale coordination", 
      link: "https://lght.mirror.xyz/zgnQyci9HqYQ8KTRcomh2_CCDepcwqrigCFQZFQz5QA" 
    },
    { 
      title: "Technocapitalism", 
      description: "Repurposing the term for the crypto industry", 
      link: "https://lght.mirror.xyz/EnqAVNDoVu3nhUJ_RRgxWn4m8QikD1ATT7v9gi04QZ8" 
    },
    { 
      title: "Explaining Higher Network", 
      description: "The whitepaper after 7+ months of scaling the network", 
      link: "https://lght.mirror.xyz/QmhfjvR_Ug-XGbTeybBCfST4_JWqDfyvdTu96yZHgHA" 
    }
  ];

  const brands: Item[] = [
    { 
      title: "Higher", 
      description: "Crypto x AI x DAO", 
      link: "https://aimhigher.net" 
    },
    { 
      title: "Stuff", 
      description: "Sensory Project", 
      link: "https://www.stuff.lol" 
    },
    { 
      title: "Yena", 
      description: "Focused on world computers", 
      link: "https://www.yena.co" 
    }
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 py-12">
          <CategoryCard 
            title="Web Apps" 
            description="Interactive digital experiences"
            items={webApps}
          />
          <CategoryCard 
            title="Communities" 
            description="Active networks and spaces"
            items={communities}
          />
          <CategoryCard 
            title="Papers" 
            description="Published research and thought pieces"
            items={papers}
          />
          <CategoryCard 
            title="Brands" 
            description="Founded and built"
            items={brands}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;