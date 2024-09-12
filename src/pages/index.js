import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={clsx(styles.heroSubtitle)}>
          {siteConfig.tagline || 'Revolutionize your FiveM server with GTA Online V2'}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/get-started">
            Get Started with GTA Online V2
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, icon}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        {icon}
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Comprehensive Guides',
    description: 'Step-by-step guides and tutorials to help you build and optimize your FiveM server with GTA Online V2.',
    icon: '📚',
  },
  {
    title: 'Powerful Tools & Configurations',
    description: 'Explore advanced tools and configuration options to fully customize your FiveM experience.',
    icon: '🛠️',
  },
  {
    title: 'Engaged Community',
    description: 'Join a thriving community of developers and players to share insights, scripts, and support.',
    icon: '🌍',
  },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title} - GTA Online V2`}
      description="Transform your FiveM server with GTA Online V2. Comprehensive guides, tools, and community support.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
