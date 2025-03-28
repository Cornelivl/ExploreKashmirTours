import { createLazyFileRoute } from '@tanstack/react-router';

import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { FeaturedTours } from '@/components/FeaturedTours';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <FeaturedTours />
      <About />
      <Testimonials />
    </Layout>
  );
}
