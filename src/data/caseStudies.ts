export interface StudyContent {
  problemStatement: string;
  targetUsers: string;
  painPoints: string;
  solution: string;
  features: string[];
  userFlow: string;
  metrics: string;
  tradeOffs: string;
}

export interface CaseStudy {
  title: string;
  tags: string[];
  readingTime: string;
  content: StudyContent;
  slug?: string;
  description?: string;
}

export const caseStudiesData: Record<string, CaseStudy> = {
  'nexus': {
    title: 'Nexus — Enterprise Spring Boot Microservices Platform',
    tags: ['Backend', 'Spring Boot', 'DDD', 'CQRS'],
    readingTime: '6 min read',
    description: 'Architecting a scalable enterprise backend with Domain-Driven Design and Command Query Responsibility Segregation.',
    content: {
      problemStatement: 'Managing cross-domain coupling and scalability in large-scale enterprise applications. Traditional monolithic architectures or poorly designed microservices lead to maintenance nightmares and deployment bottlenecks.',
      targetUsers: 'Enterprise-level applications requiring high scalability and maintainable codebases.',
      painPoints: 'High coupling between services, inconsistent data models, and complex deployment cycles.',
      solution: 'Architected a production-grade backend using Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS). Implemented stateless JWT authentication and containerized the entire stack for seamless CI/CD.',
      features: [
        'Domain-Driven Design (DDD) Architecture',
        'CQRS Pattern for Read/Write Separation',
        'Stateless JWT Authentication with Spring Security',
        'Dockerized Multi-stage Builds',
        'GitHub Actions CI/CD Pipeline',
        'Caffeine In-memory Caching'
      ],
      userFlow: 'Request → API Gateway → Service Registry (Eureka) → Domain Service → DB (PostgreSQL) → Cached Response.',
      metrics: 'Reduced cross-domain coupling across 5+ services; achieved consistent build times under 3 minutes.',
      tradeOffs: 'Increased initial architectural complexity to ensure long-term scalability and independent service evolution.'
    }
  },
  'fintrack': {
    title: 'FinTrack — Distributed Financial Microservices Suite',
    tags: ['Fintech', 'Microservices', 'OAuth2', 'Security'],
    readingTime: '5 min read',
    description: 'Securing a distributed financial platform with real-time analytics and environment-aware configuration.',
    content: {
      problemStatement: 'Building a secure, distributed financial platform that handles real-time data analytics while ensuring machine-to-machine and user-to-service security.',
      targetUsers: 'Financial institutions and users requiring real-time cash flow insights.',
      painPoints: 'Security vulnerabilities in service communication, high latency in financial reporting, and complex multi-service orchestration.',
      solution: 'Built a 6-service distributed fintech platform using Spring Cloud. Implemented OAuth2-based authentication and real-time cash flow analytics with environment-aware configuration management.',
      features: [
        '6-Service Distributed Architecture',
        'OAuth2-based M2M and User Auth',
        'Real-time Cash Flow Analytics',
        'Service Discovery & Circuit Breakers (Hystrix)',
        'Centralized Environment Configuration',
        'Docker Compose Multi-service Deployment'
      ],
      userFlow: 'User Auth (OAuth2) → Gateway → Statistics Service → Real-time Analytics Engine → Dashboard.',
      metrics: 'Reduced environment spin-up time from ~20 minutes to under 60 seconds; integrated circuit breakers for 90% reduced failure impact.',
      tradeOffs: 'Prioritized real-time analytics accuracy over supporting extremely high legacy data imports in the MVP.'
    }
  },
  'learned-index': {
    title: 'Learned Index Search Engine — High-Performance Lookup',
    tags: ['Systems', 'C++20', 'Backend'],
    readingTime: '4 min read',
    description: 'Optimizing lookup performance in large-scale data systems using predictive model-based indexing in C++20.',
    content: {
      problemStatement: 'Performance bottlenecks in standard search approaches (like binary search) when dealing with large-scale data systems. Traditional methods struggle with lookup efficiency at scale.',
      targetUsers: 'Large-scale data systems requiring ultra-fast lookup operations.',
      painPoints: 'High latency in traditional index lookups and suboptimal memory/CPU usage during heavy search loads.',
      solution: 'Built a high-performance alternative using predictive model-based indexing. Optimized lookup speed by leveraging C++20 for maximum efficiency.',
      features: [
        'Predictive Model-based Indexing',
        'C++20 High-Performance Core',
        'TCP-based API for real-time querying',
        'Benchmarking tool suite',
        'Scalable lookup architecture'
      ],
      userFlow: 'System receives data → Model predicts location → Direct memory lookup → Ultra-fast result delivery.',
      metrics: 'Achieved ~8–10× performance improvement in benchmark scenarios compared to traditional search methods.',
      tradeOffs: 'Invested more in initial model training time to achieve significantly lower lookup latency.'
    }
  },
  'omnimall': {
    title: 'OmniMall — E-Commerce Microservices Ecosystem',
    tags: ['E-Commerce', 'Spring Boot', 'Elasticsearch', 'RabbitMQ'],
    readingTime: '7 min read',
    description: 'Scaling a high-concurrency retail platform with Elasticsearch, Redis caching, and asynchronous messaging.',
    content: {
      problemStatement: 'Scaling an e-commerce platform to handle flash sales and high-concurrency user events without crashing or experiencing severe latency.',
      targetUsers: 'Retail customers demanding sub-second page loads during peak traffic events.',
      painPoints: 'Database locks during high-volume transactions, slow product search, and order processing bottlenecks.',
      solution: 'Designed an asynchronous e-commerce ecosystem. Offloaded search to Elasticsearch, implemented Redis for product caching and cart management, and utilized RabbitMQ for decoupled order processing.',
      features: [
        'High-Concurrency Architecture',
        'Elasticsearch for Sub-second Product Search',
        'Redis Distributed Caching',
        'RabbitMQ Asynchronous Order Processing',
        'Distributed Transactions (Saga Pattern)',
        'Kubernetes Ready Deployments'
      ],
      userFlow: 'User → Search (Elasticsearch) → Cart (Redis) → Checkout (RabbitMQ) → Order Service (PostgreSQL).',
      metrics: 'Supported 10,000+ concurrent requests with sub-100ms search latency; zero lost orders during simulated flash sales.',
      tradeOffs: 'Eventual consistency in order status updates in favor of immediate checkout responsiveness.'
    }
  }
};
