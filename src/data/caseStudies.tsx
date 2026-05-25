import React from 'react';
import { MotionDiv } from '@/components/Motion';
import { Database, Server, Zap, ArrowRight, Activity, CheckCircle, ShieldCheck, Cpu, Car, MapPin, Navigation, Radio, CreditCard, Clock, LineChart } from 'lucide-react';
import zeptoArch from '../../public/zepto-arch.png';
import zeptoLatencyGraph from '../../public/zepto-latency-graph.png';
import zeptoWarehouseGraph from '../../public/zepto-warehouse-graph.png';
import uberArch from '../../public/uber-arch.png';
import uberSurgeGraph from '../../public/uber-surge-graph.png';

export interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface CaseStudy {
  title: string;
  tags: string[];
  readingTime: string;
  description: string;
  sections: Section[];
}

// Helper components for the interactive Zepto case study
const ZeptoArchitecture = () => (
  <div className="flex flex-col gap-8">
    <p className="text-lg text-zinc-600 dark:text-zinc-400">
      The core architecture is designed for extreme low-latency and fault tolerance. We split the system into dedicated microservices handling specific domains.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {['API Gateway', 'User Service', 'Product Catalog', 'Inventory Service ⭐', 'Order Service', 'Payment Service', 'Delivery Service', 'Warehouse Service', 'Notification'].map((service, i) => (
        <MotionDiv
          key={service}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className={`p-4 rounded-xl border ${service.includes('⭐') ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'}`}
        >
          <div className="flex items-center gap-3">
            <Server className={`h-5 w-5 ${service.includes('⭐') ? 'text-amber-500' : 'text-zinc-400'}`} />
            <span className="font-bold text-sm">{service.replace(' ⭐', '')}</span>
          </div>
          {service.includes('⭐') && <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-medium">Critical Component</p>}
        </MotionDiv>
      ))}
    </div>

    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl w-full border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group shadow-xl">
      <img src={zeptoArch.src} className="w-full h-auto object-cover" alt="Zepto High Level Architecture Diagram" />
    </div>
  </div>
);

const GraphAnalysis = () => (
  <div className="flex flex-col gap-12">
    <p className="text-lg text-zinc-600 dark:text-zinc-400">
      Visualizing system behavior during peak load reveals critical bottlenecks. Here is a breakdown of the core challenges observed.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Latency vs Traffic</h3>
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-xl">
          <img src={zeptoLatencyGraph.src} className="w-full h-auto object-cover" alt="Latency vs Traffic Graph" />
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Insight:</strong> Latency increases exponentially during peak hours. <br />
          <strong>Solution:</strong> Auto-scaling + aggressive caching strategy.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold">Warehouse Load Distribution</h3>
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-xl">
          <img src={zeptoWarehouseGraph.src} className="w-full h-auto object-cover" alt="Warehouse Load Distribution Graph" />
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Insight:</strong> Uneven load across nodes causes massive delays. <br />
          <strong>Solution:</strong> Smart routing based on live node health.
        </p>
      </div>
    </div>
  </div>
);

const UberArchitecture = () => (
  <div className="flex flex-col gap-8">
    <p className="text-lg text-zinc-600 dark:text-zinc-400">
      The core architecture is highly distributed and event-driven. Here is a simplified high-level view of the major microservices coordinating a ride.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {['API Gateway', 'Location Ingestion ⭐', 'Matching Engine ⭐', 'Dispatch Service', 'Trip Management', 'Pricing Service', 'Payments Service', 'Kafka Event Bus', 'Redis (Live Geo)'].map((service, i) => (
        <MotionDiv
          key={service}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className={`p-4 rounded-xl border ${service.includes('⭐') ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : 'bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800'}`}
        >
          <div className="flex items-center gap-3">
            <Server className={`h-5 w-5 ${service.includes('⭐') ? 'text-blue-500' : 'text-zinc-400'}`} />
            <span className="font-bold text-sm">{service.replace(' ⭐', '')}</span>
          </div>
          {service.includes('⭐') && <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">Critical Component</p>}
        </MotionDiv>
      ))}
    </div>

    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl w-full border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group shadow-xl">
      <img src={uberArch.src} className="w-full h-auto object-cover" alt="Uber High Level Architecture Diagram" />
    </div>
  </div>
);

const UberGraphAnalysis = () => (
  <div className="flex flex-col gap-12">
    <p className="text-lg text-zinc-600 dark:text-zinc-400">
      Surge pricing is calculated by analyzing the real-time gap between rider demand and driver availability in a specific geo-fence.
    </p>

    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold">Demand vs Available Drivers (Surge Model)</h3>
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-xl max-w-4xl mx-auto w-full">
        <img src={uberSurgeGraph.src} className="w-full h-auto object-cover" alt="Surge Pricing Graph" />
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 max-w-4xl mx-auto">
        <strong>Insight:</strong> As demand (red line) spikes sharply during peak hours or events, available drivers (blue line) can stagnate or decrease as they get matched.<br /><br />
        <strong>Solution:</strong> The Pricing Service continuously monitors this differential using streaming data (Kafka). When the ratio crosses a threshold, a surge multiplier is applied. This achieves two things: it reduces artificial demand (price sensitivity) and incentivizes offline drivers to come online and drive towards the surge zone.
      </p>
    </div>
  </div>
);

export const caseStudiesData: Record<string, CaseStudy> = {
  'zepto': {
    title: 'Zepto — 10-Minute Grocery Delivery System',
    tags: ['System Design', 'Microservices', 'High Concurrency', 'Redis'],
    readingTime: '10 min read',
    description: 'Architecting an ultra-fast grocery delivery backend handling real-time inventory accuracy and millisecond warehouse selection under extreme concurrency.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: (
          <>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Zepto promises ultra-fast grocery delivery (under 10 minutes). The real challenge isn&apos;t just the physical delivery speed — it&apos;s the backend orchestration required to make it possible.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                'Real-time inventory accuracy (preventing overselling)',
                'Warehouse selection in milliseconds',
                'Handling high concurrency during peak demand (flash sales)'
              ].map(item => (
                <li key={item} className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <Zap className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )
      },
      {
        id: 'requirements',
        title: 'System Requirements',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Functional</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• Browse products (search, filter, categories)</li>
                <li>• Add to cart & checkout</li>
                <li>• Real-time inventory visibility</li>
                <li>• Order placement & live tracking</li>
                <li>• Payment processing</li>
                <li>• Notifications (push/SMS/email)</li>
              </ul>
            </div>
            <div className="bg-zinc-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Cpu className="h-5 w-5 text-blue-400" /> Non-Functional</h3>
              <ul className="space-y-3 text-zinc-300">
                <li>• Low latency (&lt;200ms response time)</li>
                <li>• High availability (99.99%)</li>
                <li>• Strong consistency (inventory)</li>
                <li>• Scalability (millions of users)</li>
                <li>• Fault tolerance</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'architecture',
        title: 'High-Level Architecture',
        content: <ZeptoArchitecture />
      },
      {
        id: 'low-level-design',
        title: 'Low-Level Design (Service Breakdown)',
        content: (
          <div className="flex flex-col gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Database className="h-5 w-5 text-amber-500" /> Inventory Service (The Critical Path)</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                <strong>Challenge:</strong> Preventing overselling during flash sales while maintaining &lt;50ms response times.
                <br /><br />
                <strong>Implementation:</strong> Instead of hitting PostgreSQL directly, inventory is cached in a Redis cluster. We use <strong>Redis Lua Scripts</strong> to perform atomic check-and-deduct operations. If stock exists, it&apos;s reserved instantly.
                <br /><br />
                <strong>Database Sync:</strong> The reservation event is published to Kafka. A background consumer updates the PostgreSQL source-of-truth asynchronously.
                <br /><br />
                <strong>Failure Handling:</strong> If an order fails (e.g., payment failure), a compensating transaction (via Saga pattern) restores the Redis stock and updates the DB.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full">Redis (Atomic Locks)</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-full">PostgreSQL (Source of Truth)</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-bold rounded-full">Kafka (Event Sync)</span>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Server className="h-5 w-5 text-zinc-500" /> Order Service (State Management)</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Architecture:</strong> Operates as a distributed state machine using the <strong>Saga Pattern</strong>.
                <br /><br />
                <strong>Flow:</strong> It orchestrates distributed transactions across services: <code>Create Pending Order</code> → <code>Reserve Inventory</code> → <code>Process Payment</code> → <code>Confirm Order</code> → <code>Trigger Packing</code>.
                <br /><br />
                <strong>Idempotency:</strong> Implements strict idempotency keys (e.g., <code>X-Idempotency-Key</code> header) to ensure retries during network failures never result in duplicate orders.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Activity className="h-5 w-5 text-green-500" /> Delivery Service (Real-time Orchestration)</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                <strong>Rider Assignment:</strong> Uses a bipartite matching algorithm (like Hungarian algorithm) to map available riders to nearby orders based on SLA requirements and batching potential.
                <br /><br />
                <strong>Tracking:</strong> Uses WebSockets to stream high-frequency location updates from the rider app to the user app, heavily optimized by dropping stale location packets to save bandwidth.
              </p>
            </div>
          </div>
        )
      },
      {
        id: 'order-flow',
        title: 'End-to-End Order Flow',
        content: (
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-200 dark:bg-zinc-800 z-0" />
            {[
              'User places order',
              'Inventory reserved (atomic operation)',
              'Order created',
              'Payment processed',
              'Warehouse assigned',
              'Packing initiated',
              'Delivery partner assigned',
              'Real-time tracking starts'
            ].map((step, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 relative z-10"
              >
                <div className="h-12 w-12 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold shrink-0 shadow-lg">
                  {i + 1}
                </div>
                <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 font-medium">
                  {step}
                </div>
              </MotionDiv>
            ))}
          </div>
        )
      },
      {
        id: 'data-model',
        title: 'Data Model & API Design',
        content: (
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Spatial Data & Schemas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 border border-zinc-100 dark:border-zinc-800 rounded-xl">
                  <h4 className="font-bold mb-2 text-zinc-800 dark:text-zinc-200">Warehouses & Users (PostgreSQL)</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Utilizes <strong>PostGIS</strong> extensions for fast spatial querying (e.g., <code>ST_Distance</code>) to find the nearest serviceable dark store in milliseconds based on user coordinates.
                  </p>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-6 border border-zinc-100 dark:border-zinc-800 rounded-xl">
                  <h4 className="font-bold mb-2 text-zinc-800 dark:text-zinc-200">Product Catalog (MongoDB)</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Handles dynamic attributes (varying metadata for electronics vs groceries). Synced to Elasticsearch for fuzzy search and autocomplete.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Core API Design & Best Practices</h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl">
                  <div className="font-mono font-bold mb-2">POST /v1/orders</div>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <li><strong>Headers:</strong> <code>X-Idempotency-Key</code></li>
                    <li><strong>Payload:</strong> User ID, Store ID, Items Array, Delivery Coordinates.</li>
                    <li><strong>Response:</strong> Returns <code>202 Accepted</code> (async processing) instead of waiting for full payment and inventory confirmation, instantly giving the user a loading/processing screen via WebSockets.</li>
                  </ul>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl">
                  <div className="font-mono font-bold mb-2">GET /v1/inventory/stores/{'{id}'}/stock</div>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <li><strong>Performance:</strong> Served entirely from the Redis Cache. Uses a highly optimized hash map: <code>HGETALL store:{'{id}'}:stock</code>.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'graphs',
        title: 'Graph Analysis',
        content: <GraphAnalysis />
      },
      {
        id: 'challenges',
        title: 'Engineering Challenges',
        content: (
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-100 dark:border-red-900/50">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Inventory Consistency
              </h3>
              <p className="text-red-800 dark:text-red-300 mb-4">Without proper locking mechanisms, high concurrency leads to overselling items.</p>
              <div className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-lg border border-red-100 dark:border-red-900/30 font-medium flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-red-500" /> Solution: Optimistic locking + Redis atomic operations.
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/50">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5" /> Flash Sales Concurrency
              </h3>
              <p className="text-blue-800 dark:text-blue-300 mb-4">Traffic spikes can cause thousands of requests per second, overwhelming the database.</p>
              <div className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/30 font-medium flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" /> Solution: Kafka queueing and aggressive rate limiting.
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'scaling',
        title: 'Scaling Strategy & Advanced Improvements',
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Scaling Strategy</h3>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100 block mb-1">Geo-Sharding</strong>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">The entire system is sharded geographically. The API Gateway inspects the user&apos;s location and routes the request to a specific regional cluster. An order in Mumbai never touches the servers processing orders in Delhi.</p>
                
                <strong className="text-zinc-900 dark:text-zinc-100 block mb-1">Kafka Partitioning</strong>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">All events in Kafka are partitioned using the <code>order_id</code> as the partition key. This guarantees strict chronological ordering of events for a specific order, preventing race conditions.</p>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Advanced Improvements</h3>
              <div>
                <strong className="text-zinc-900 dark:text-zinc-100 block mb-1">AI Demand Prediction</strong>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Machine learning models analyze historical purchasing patterns, weather data, and local events to pre-position inventory. For example, stocking extra umbrellas in specific dark stores hours before a forecasted rainstorm.</p>
                
                <strong className="text-zinc-900 dark:text-zinc-100 block mb-1">Dynamic Delivery Batching</strong>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">While prioritizing 10-minute SLAs, the system dynamically groups orders heading to the same apartment complex or street if they are placed within a 60-second window, drastically reducing rider operational costs.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'bonus',
        title: 'Bonus: Open Source Project',
        content: (
          <div className="p-8 bg-zinc-900 text-white rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">🚀 Building a Mini Zepto</h3>
            <p className="text-zinc-400 mb-6">
              I am currently building a mini Zepto backend system featuring real-time inventory management, order processing, and Kafka-based async flows.
            </p>
            <div className="inline-block px-4 py-2 bg-zinc-800 rounded-lg text-sm font-bold text-zinc-300">
              GitHub link coming soon!
            </div>
          </div>
        )
      },
      {
        id: 'takeaways',
        title: 'Final Takeaways',
        content: (
          <div className="p-12 bg-zinc-900 text-white rounded-[2rem] text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Zepto is not just a delivery app.</h2>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              It is a real-time distributed system solving deeply complex inventory, logistics, and latency problems at scale.
            </p>
            <div className="mt-4 px-6 py-3 bg-zinc-800 rounded-full text-sm font-bold tracking-widest uppercase text-zinc-300">
              Tech Stack: Spring Boot • PostgreSQL • Redis • Kafka • AWS
            </div>
          </div>
        )
      }
    ]
  },
  'nexus': {
    title: 'Nexus — Enterprise Spring Boot Microservices Platform',
    tags: ['Backend', 'Spring Boot', 'DDD', 'CQRS'],
    readingTime: '6 min read',
    description: 'Architecting a scalable enterprise backend with Domain-Driven Design and Command Query Responsibility Segregation.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Managing cross-domain coupling and scalability in large-scale enterprise applications. Traditional monolithic architectures or poorly designed microservices lead to maintenance nightmares and deployment bottlenecks.</p>
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Architected a production-grade backend using Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS). Implemented stateless JWT authentication and containerized the entire stack for seamless CI/CD.</p>
      }
    ]
  },
  'fintrack': {
    title: 'FinTrack — Distributed Financial Microservices Suite',
    tags: ['Fintech', 'Microservices', 'OAuth2', 'Security'],
    readingTime: '5 min read',
    description: 'Securing a distributed financial platform with real-time analytics and environment-aware configuration.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Building a secure, distributed financial platform that handles real-time data analytics while ensuring machine-to-machine and user-to-service security.</p>
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Built a 6-service distributed fintech platform using Spring Cloud. Implemented OAuth2-based authentication and real-time cash flow analytics with environment-aware configuration management.</p>
      }
    ]
  },
  'learned-index': {
    title: 'Learned Index Search Engine — High-Performance Lookup',
    tags: ['Systems', 'C++20', 'Backend'],
    readingTime: '4 min read',
    description: 'Optimizing lookup performance in large-scale data systems using predictive model-based indexing in C++20.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Performance bottlenecks in standard search approaches (like binary search) when dealing with large-scale data systems. Traditional methods struggle with lookup efficiency at scale.</p>
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Built a high-performance alternative using predictive model-based indexing. Optimized lookup speed by leveraging C++20 for maximum efficiency.</p>
      }
    ]
  },
  'omnimall': {
    title: 'OmniMall — E-Commerce Microservices Ecosystem',
    tags: ['E-Commerce', 'Spring Boot', 'Elasticsearch', 'RabbitMQ'],
    readingTime: '7 min read',
    description: 'Scaling a high-concurrency retail platform with Elasticsearch, Redis caching, and asynchronous messaging.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Scaling an e-commerce platform to handle flash sales and high-concurrency user events without crashing or experiencing severe latency.</p>
      },
      {
        id: 'solution',
        title: 'The Solution',
        content: <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">Designed an asynchronous e-commerce ecosystem. Offloaded search to Elasticsearch, implemented Redis for product caching and cart management, and utilized RabbitMQ for decoupled order processing.</p>
      }
    ]
  },
  'uber': {
    title: 'Uber — Real-Time Ride Matching System at Scale',
    tags: ['System Design', 'Real-Time', 'Distributed Systems', 'Kafka'],
    readingTime: '12 min read',
    description: 'Exploring the backend architecture of Uber, focusing on real-time location tracking, rider-driver matching, dynamic pricing, and fault-tolerant trip state management.',
    sections: [
      {
        id: 'problem',
        title: 'Problem Statement',
        content: (
          <>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Uber looks simple from the user side: Open app → Enter destination → Get matched with a driver → Track the ride in real time. But the real engineering challenge is handling millions of concurrent, rapidly shifting location streams and orchestrating a distributed state machine for every trip.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> Functional Requirements</h3>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                  <li>• Match riders to drivers (low latency)</li>
                  <li>• Continuous driver location tracking</li>
                  <li>• Dynamic Surge Pricing</li>
                  <li>• Real-time trip state updates</li>
                  <li>• ETA & route calculation</li>
                </ul>
              </div>
              <div className="bg-zinc-900 text-white p-8 rounded-2xl border border-zinc-800">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Cpu className="h-5 w-5 text-blue-400" /> Non-Functional</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li>• High Concurrency (Millions of streams)</li>
                  <li>• Ultra-low latency for matching</li>
                  <li>• High Availability (No downtime)</li>
                  <li>• Fault tolerance for payments/states</li>
                  <li>• Geo-scalability (City by city)</li>
                </ul>
              </div>
            </div>
          </>
        )
      },
      {
        id: 'architecture',
        title: 'High-Level Architecture',
        content: <UberArchitecture />
      },
      {
        id: 'workflow',
        title: 'Trip Workflow (The State Machine)',
        content: (
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-200 dark:bg-zinc-800 z-0" />
            {[
              { title: 'Driver Online', desc: 'Driver connects via WebSockets and begins streaming location.' },
              { title: 'Ride Requested', desc: 'Rider POSTs /trips. Pricing & ETA services calculate upfront fare.' },
              { title: 'Matching Engine', desc: 'Finds optimal driver based on H3 spatial indexing and SLA logic.' },
              { title: 'Ride Accepted', desc: 'Driver taps accept. Trip transitions to ACCEPTED. Trip event pushed to Kafka.' },
              { title: 'Real-Time Sync', desc: 'Rider receives live driver coordinates via WebSocket stream.' },
              { title: 'Trip Started', desc: 'Driver picks up rider. Route transitions to drop-off.' },
              { title: 'Payment Orchestration', desc: 'Trip ends. Saga pattern processes payment, handles retries, updates rating.' }
            ].map((step, i) => (
              <MotionDiv
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 relative z-10"
              >
                <div className="h-12 w-12 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold shrink-0 shadow-lg mt-1">
                  {i + 1}
                </div>
                <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 p-5 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{step.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">{step.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        )
      },
      {
        id: 'data-model',
        title: 'Data Model & API Design',
        content: (
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Location Stream Payload (WebSocket)</h3>
              <div className="p-4 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl font-mono text-sm overflow-x-auto">
                {`{
  "driver_id": "drv_9876xyz",
  "lat": 37.7749,
  "lng": -122.4194,
  "timestamp": 1716503920,
  "status": "AVAILABLE",
  "geo_hash": "9q8yy" // For fast indexing
}`}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Core Endpoints</h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-xl">
                  <div className="font-mono font-bold mb-2">POST /v1/trips</div>
                  <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                    <li><strong>Action:</strong> Initiates the ride matching process.</li>
                    <li><strong>Response:</strong> <code>202 Accepted</code> (Asynchronous). The client then listens on its WebSocket connection for the <code>DRIVER_MATCHED</code> event rather than keeping an HTTP request hanging.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'graphs',
        title: 'Surge Pricing Analytics',
        content: <UberGraphAnalysis />
      },
      {
        id: 'challenges',
        title: 'Engineering Challenges',
        content: (
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-100 dark:border-red-900/50">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-400 mb-2 flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Location Ingestion at Scale
              </h3>
              <p className="text-red-800 dark:text-red-300 mb-4">Millions of drivers sending GPS coordinates every 3-5 seconds creates a massive write-heavy workload that traditional SQL databases cannot handle.</p>
              <div className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-lg border border-red-100 dark:border-red-900/30 font-medium flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-red-500" /> Solution: Ingest via WebSockets → Buffer in Kafka → Store live state in Redis.
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/50">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5" /> The Matching Problem
              </h3>
              <p className="text-blue-800 dark:text-blue-300 mb-4">Finding the nearest driver using standard latitude/longitude math (Haversine formula) across all drivers is O(N) and too slow for real-time.</p>
              <div className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-lg border border-blue-100 dark:border-blue-900/30 font-medium flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-blue-500" /> Solution: Geo-spatial indexing (Uber uses H3, a hexagonal grid system). Converts 2D coordinates to 1D strings.
              </div>
            </div>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-100 dark:border-amber-900/50">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Trip State Consistency
              </h3>
              <p className="text-amber-800 dark:text-amber-300 mb-4">A trip involves multiple services (Matching, Pricing, Payments). If payment fails but the trip is marked complete, data is inconsistent.</p>
              <div className="bg-white dark:bg-zinc-900 px-4 py-3 rounded-lg border border-amber-100 dark:border-amber-900/30 font-medium flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-amber-500" /> Solution: Distributed Saga Pattern and strict Idempotency keys on all mutations.
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'event-driven',
        title: 'Event-Driven Architecture (Kafka)',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <h3 className="text-xl font-bold flex items-center gap-2"><Radio className="h-6 w-6 text-indigo-500" /> Decoupled Event Streams</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Instead of synchronous API calls (which cascade failures), services publish state changes to Kafka topics. This allows auxiliary services (like Analytics, Receipts, Notifications) to consume data asynchronously without impacting the critical path.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-6 rounded-xl border border-zinc-800 font-mono text-sm overflow-x-auto flex flex-col justify-center">
              <div className="text-indigo-400 mb-2 font-bold">// Core Kafka Topics</div>
              <div>Topic: <span className="text-green-400">driver_locations</span></div>
              <div className="pl-4 text-zinc-500">→ High-throughput live telemetry</div>
              <div className="mt-4">Topic: <span className="text-amber-400">trip_lifecycle</span></div>
              <div className="pl-4 text-zinc-500">→ RideRequested, RideAccepted</div>
              <div className="pl-4 text-zinc-500">→ TripStarted, TripCompleted</div>
            </div>
          </div>
        )
      }
    ]
  }
};
