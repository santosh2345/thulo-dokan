import { Categories } from '@/categories/categories';
import { Container } from '@/common/container';
import { Hero } from '@/common/hero';
import { getMetadata } from '@/seo/seo-utils';

export const metadata = getMetadata({ title: 'Home', pathname: '/' });

export default function LandingPage() {
  return (
    <main>
      
      <Container maxWidth="xl" className="p-4">
        <Categories />
        <Hero />
      </Container>
    </main>
  );
}
