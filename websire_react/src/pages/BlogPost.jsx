import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BookDiscoveryCallButton from '../components/BookDiscoveryCallButton';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft, FaLinkedin, FaTwitter, FaLink, FaQuoteLeft } from 'react-icons/fa';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "eu-ai-act-what-enterprises-need-to-know": {
      id: 1,
      title: "A Near-Miss with the EU AI Act: Lessons from Our Client Engagement",
      excerpt: "When a client's AI hiring tool nearly violated regulations weeks before deployment, it changed how we approach every AI project. Here's what we learned and what it means for enterprises.",
      author: "Greyquill Team",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "AI Governance",
      content: [
        {
          type: "paragraph",
          text: "Earlier this year, we were engaged by a mid-sized recruiting firm to build an AI-powered resume screening tool. The project was on schedule, testing was complete, and deployment was two weeks away. Then their legal counsel asked a question that stopped everything: \"Have we conducted an AI risk assessment for this system?\""
        },
        {
          type: "paragraph",
          text: "That question led to a three-month delay. It also fundamentally changed how we approach AI projects at Greyquill."
        },
        {
          type: "heading2",
          text: "What We Discovered"
        },
        {
          type: "paragraph",
          text: "The EU AI Act classifies AI used in recruitment decisions as \"high-risk.\" This designation triggers mandatory requirements: risk assessments, technical documentation, human oversight mechanisms, and bias testing protocols. Our client—a US company—had European job applicants, which brought them under the regulation's scope."
        },
        {
          type: "paragraph",
          text: "The Act's reach extends beyond European borders. Any organization deploying AI systems that affect EU residents must comply, regardless of where the company is headquartered."
        },
        {
          type: "callout",
          title: "EU AI Act Risk Classifications",
          items: [
            "Unacceptable Risk: Prohibited outright. Includes social scoring systems, real-time biometric identification in public spaces, and AI designed to manipulate behavior.",
            "High Risk: Strict requirements apply. Covers AI in recruitment, credit scoring, medical diagnostics, and critical infrastructure.",
            "Limited Risk: Transparency obligations. Primarily affects chatbots and AI-generated content—users must be informed they're interacting with AI.",
            "Minimal Risk: No specific requirements. Includes spam filters, recommendation systems, and similar applications."
          ]
        },
        {
          type: "heading2",
          text: "The Compliance Requirements That Matter"
        },
        {
          type: "paragraph",
          text: "Through this engagement and subsequent projects, we've identified the requirements that have the most practical impact:"
        },
        {
          type: "heading3",
          text: "Technical Documentation"
        },
        {
          type: "paragraph",
          text: "The Act requires comprehensive documentation of how AI systems are designed, trained, and validated. This includes training data sources, model architecture decisions, testing methodologies, and known limitations. We encountered a client who had been using a vendor's AI tool for two years but couldn't answer basic questions about how it functioned. Under the EU AI Act, that's a compliance gap."
        },
        {
          type: "heading3",
          text: "Human Oversight Mechanisms"
        },
        {
          type: "paragraph",
          text: "High-risk AI cannot operate autonomously without human intervention capability. For our recruiting client, this meant implementing a review step where human recruiters examine any application the AI recommends for rejection. This requirement adds process overhead but is non-negotiable for high-risk applications."
        },
        {
          type: "heading3",
          text: "Bias Testing and Monitoring"
        },
        {
          type: "paragraph",
          text: "Organizations must actively test for discriminatory outcomes and document findings. We worked with a healthcare client whose diagnostic AI showed performance variations across demographic groups. Previously, this would have been a reputational concern. Under the EU AI Act, it's a compliance violation requiring remediation."
        },
        {
          type: "heading2",
          text: "The Financial Stakes"
        },
        {
          type: "paragraph",
          text: "The penalty structure is significant:"
        },
        {
          type: "list",
          items: [
            "Up to €35 million or 7% of global annual turnover for deploying prohibited AI",
            "Up to €15 million or 3% for violating high-risk AI requirements",
            "Up to €7.5 million or 1.5% for providing incorrect information to regulators"
          ]
        },
        {
          type: "paragraph",
          text: "These figures exceed GDPR penalty levels, signaling regulators' intent to enforce aggressively."
        },
        {
          type: "heading2",
          text: "How We've Adapted Our Approach"
        },
        {
          type: "paragraph",
          text: "Following this experience, we've integrated compliance considerations into our standard project methodology:"
        },
        {
          type: "list",
          items: [
            "Risk classification occurs before development begins. We assess which regulatory category applies and design accordingly.",
            "Documentation is built into the development process, not added afterward. Every model includes a \"model card\" tracking training data, known limitations, and test results.",
            "Human oversight is architected from the start for high-risk applications. Retrofitting these mechanisms later is significantly more expensive.",
            "Bias testing is standard practice, regardless of whether clients specifically request it."
          ]
        },
        {
          type: "quote",
          text: "The additional upfront investment in compliance is consistently less expensive than remediation after deployment.",
          author: "Observation from our project retrospectives"
        },
        {
          type: "heading2",
          text: "Timeline Considerations"
        },
        {
          type: "paragraph",
          text: "Enforcement begins in August 2026. Given typical enterprise project timelines, organizations planning AI deployments that affect EU users should be incorporating these requirements now."
        },
        {
          type: "paragraph",
          text: "We've observed that organizations preparing proactively gain competitive advantage. Those who wait face the challenge of retrofitting compliance into systems not designed for it—a significantly more complex undertaking."
        },
        {
          type: "heading2",
          text: "An Unexpected Benefit"
        },
        {
          type: "paragraph",
          text: "Compliance work has consistently improved the quality of our clients' AI implementations. The documentation process forces deeper understanding of model behavior. Bias testing catches issues that would otherwise reach production. Human oversight mechanisms often improve accuracy."
        },
        {
          type: "paragraph",
          text: "Building AI responsibly and building AI effectively turn out to be closely aligned objectives."
        },
        {
          type: "heading2",
          text: "Recommendations"
        },
        {
          type: "paragraph",
          text: "For organizations assessing their EU AI Act readiness, we recommend starting with a single AI system: conduct a risk assessment, identify gaps against the requirements, and use that exercise to build organizational understanding. The practical learning from one assessment is more valuable than theoretical study of the regulation."
        }
      ]
    },
    "on-premise-vs-cloud-ai-making-the-right-choice": {
      id: 2,
      title: "Why We Recommended $180K in GPU Servers Over Cloud AI",
      excerpt: "A healthcare client's clinical documentation project challenged the assumption that cloud is always the right answer. Here's the analysis that led to an on-premise recommendation—and the results six months later.",
      author: "Greyquill Team",
      date: "January 8, 2026",
      readTime: "10 min read",
      category: "AI Strategy",
      content: [
        {
          type: "paragraph",
          text: "Last spring, we sat in a planning session with a healthcare client's CTO, CFO, and compliance officer. The project: AI-powered clinical documentation that would transcribe doctor-patient conversations and generate notes. The CTO favored a leading cloud AI provider. The CFO wanted the lowest-cost option. The compliance officer wanted to understand where patient data would flow."
        },
        {
          type: "paragraph",
          text: "After three hours of analysis, we recommended spending $180,000 on GPU servers for on-premise deployment. Six months later, that decision has saved the client over $400,000 in projected annual costs and simplified their HIPAA compliance posture."
        },
        {
          type: "heading2",
          text: "The Cost Analysis"
        },
        {
          type: "paragraph",
          text: "Cloud AI pricing is optimized for experimentation and variable workloads. At production scale with predictable usage, the economics often shift."
        },
        {
          type: "paragraph",
          text: "This client operates with 200 physicians, each seeing approximately 20 patients daily. That's 4,000 patient encounters generating 10-15 minutes of audio requiring transcription and summarization."
        },
        {
          type: "callout",
          title: "Cloud Deployment Cost Projection",
          items: [
            "Transcription API: ~$0.006 per minute of audio",
            "LLM API for summarization: ~$0.03 per encounter",
            "Daily operating cost: approximately $800",
            "Annual operating cost: ~$290,000",
            "Additional factors: Data transfer fees, storage costs, and announced 15% price increase"
          ]
        },
        {
          type: "callout",
          title: "On-Premise Deployment Cost",
          items: [
            "4x NVIDIA A100 GPUs: $60,000",
            "Server hardware and infrastructure: $40,000",
            "Setup, integration, and deployment: $50,000",
            "Annual maintenance and power: ~$30,000",
            "Year 1 total investment: $180,000",
            "Year 2+ annual cost: ~$30,000"
          ]
        },
        {
          type: "paragraph",
          text: "The break-even point occurred at month 8. By month 18, cumulative savings exceeded $200,000 compared to cloud deployment—and this calculation predates the cloud provider's announced price increase."
        },
        {
          type: "heading2",
          text: "The Compliance Factor"
        },
        {
          type: "paragraph",
          text: "Cost wasn't the only consideration. When patient conversations are sent to third-party APIs, that data leaves the organization's environment. Cloud providers offer Business Associate Agreements for HIPAA and state that data isn't used for training. However, the compliance officer correctly noted the distinction between contractual assurances and architectural guarantees."
        },
        {
          type: "paragraph",
          text: "With on-premise deployment, patient audio never leaves the hospital network. The compliance narrative becomes straightforward: data stays within organizational boundaries with complete audit trail control."
        },
        {
          type: "quote",
          text: "Our board had concerns about AI processing patient data. Being able to demonstrate that nothing leaves our servers changed the conversation entirely.",
          author: "Client CTO, six months post-deployment"
        },
        {
          type: "heading2",
          text: "When Cloud Deployment Makes Sense"
        },
        {
          type: "paragraph",
          text: "This analysis doesn't support a universal preference for on-premise deployment. We regularly recommend cloud AI for appropriate use cases:"
        },
        {
          type: "heading3",
          text: "Experimentation and Prototyping"
        },
        {
          type: "paragraph",
          text: "When testing approaches or validating whether AI will work for a particular use case, cloud deployment's low initial investment is valuable. The key is distinguishing prototype costs from production costs in planning."
        },
        {
          type: "heading3",
          text: "Variable or Unpredictable Usage"
        },
        {
          type: "paragraph",
          text: "We worked with a retail client on demand forecasting that spiked 10x during holiday seasons and dropped to minimal usage in January. Cloud deployment was clearly appropriate—you cannot purchase GPU servers for two months and return them."
        },
        {
          type: "heading3",
          text: "Limited ML Operations Capability"
        },
        {
          type: "paragraph",
          text: "Operating AI infrastructure requires specialized expertise. If an organization lacks this capability and doesn't want to build it, cloud deployment abstracts away operational complexity. This is a legitimate trade-off depending on organizational priorities."
        },
        {
          type: "heading2",
          text: "The Hybrid Approach"
        },
        {
          type: "paragraph",
          text: "For most enterprises, the optimal answer isn't exclusively cloud or on-premise—it's determining which workloads belong where."
        },
        {
          type: "paragraph",
          text: "Our healthcare client runs patient-facing AI on-premise. Their back-office analytics—operational efficiency analysis, equipment maintenance prediction—runs on cloud infrastructure. Different data sensitivity levels and usage patterns warrant different deployment models."
        },
        {
          type: "paragraph",
          text: "Industry analysts project that 75% of enterprises will adopt hybrid approaches by 2027. This reflects strategic optimization rather than indecision."
        },
        {
          type: "heading2",
          text: "Decision Framework"
        },
        {
          type: "paragraph",
          text: "We evaluate deployment decisions against these criteria:"
        },
        {
          type: "list",
          items: [
            "Data sensitivity: Customer PII, protected health information, or financial data are strong candidates for on-premise deployment",
            "Usage patterns: High volume with predictable usage favors on-premise; variable or seasonal usage favors cloud",
            "Regulatory requirements: Data residency requirements, industry-specific regulations, and government contract obligations inform the decision",
            "Organizational capability: ML operations maturity affects the feasibility of managing on-premise infrastructure",
            "Customization needs: Proprietary model development or fine-tuning on sensitive data often requires on-premise deployment"
          ]
        },
        {
          type: "heading2",
          text: "Additional Observations"
        },
        {
          type: "paragraph",
          text: "**Latency differences are measurable.** Our on-premise deployment returns responses in approximately 200ms. The cloud equivalent showed 800ms-1.2s depending on load. For interactive applications, users perceive this difference."
        },
        {
          type: "paragraph",
          text: "**Vendor lock-in is a real consideration.** Three months into one engagement, we determined that migrating away from a cloud provider's proprietary AI features would require rewriting substantial portions of the integration layer. Planning for portability is worthwhile."
        },
        {
          type: "paragraph",
          text: "**Infrastructure availability fluctuates.** During periods of high AI demand, cloud GPU capacity has been genuinely constrained. We've had clients unable to provision needed instances for weeks. On-premise hardware remains under organizational control."
        },
        {
          type: "heading2",
          text: "Conclusion"
        },
        {
          type: "paragraph",
          text: "There's no universal correct answer to the cloud versus on-premise question. Cloud providers and hardware vendors each advocate for their approach. The appropriate choice depends on specific organizational context: data sensitivity, regulatory environment, usage patterns, scale, and internal capabilities."
        },
        {
          type: "paragraph",
          text: "The $180,000 GPU investment was the right decision for this particular client. We've recommended cloud deployment for other projects where the analysis supported that conclusion. What matters is conducting the analysis rather than defaulting to assumptions."
        }
      ]
    },
    "building-ai-governance-from-scratch": {
      id: 3,
      title: "Building AI Governance: What Two Failed Attempts Taught Us",
      excerpt: "Our first governance framework was comprehensive but unused. Our second was lightweight but ineffective. The third attempt found the balance. Here's how it evolved.",
      author: "Greyquill Team",
      date: "December 28, 2025",
      readTime: "12 min read",
      category: "AI Governance",
      content: [
        {
          type: "paragraph",
          text: "Over the past three years, we've helped establish AI governance frameworks for approximately a dozen organizations. The first two implementations failed to achieve their objectives. Those failures informed everything that's worked since."
        },
        {
          type: "heading2",
          text: "First Attempt: Comprehensive but Impractical"
        },
        {
          type: "paragraph",
          text: "Our first governance engagement was with a financial services firm in 2023. We developed comprehensive policies covering risk classifications, approval workflows, documentation requirements, and monitoring protocols. The resulting framework spanned 47 pages."
        },
        {
          type: "paragraph",
          text: "Six months after implementation, the client reported that their data science team had deployed four new AI models without following any of the established processes. When we investigated, the team lead's response was direct: \"That document is 47 pages. I'm not reading it to deploy a fraud detection update.\""
        },
        {
          type: "paragraph",
          text: "The framework was thorough. It was also unusable. Teams simply worked around it."
        },
        {
          type: "heading2",
          text: "Second Attempt: Lightweight but Ineffective"
        },
        {
          type: "paragraph",
          text: "Learning from that experience, we took the opposite approach with the next client—a healthcare technology company. Simple one-page guidelines. Trust in team judgment. Minimal bureaucratic overhead."
        },
        {
          type: "paragraph",
          text: "Eight months later, they discovered that one of their AI models had been generating biased predictions for over a year. The model was used in patient risk scoring and was systematically underestimating risk for certain demographic groups. No one had caught the issue because no one was checking."
        },
        {
          type: "paragraph",
          text: "The reputational impact was significant. The regulatory scrutiny was more so."
        },
        {
          type: "quote",
          text: "Comprehensive governance that no one follows is worse than imperfect governance that everyone follows. But governance that catches nothing isn't governance at all.",
          author: "Internal retrospective conclusion"
        },
        {
          type: "heading2",
          text: "The Insight: Risk-Proportionate Governance"
        },
        {
          type: "paragraph",
          text: "Both approaches failed because they applied uniform treatment to fundamentally different situations. A spam filter and a loan approval system have different risk profiles. Governing them identically—whether with 47 pages or one page—doesn't serve either appropriately."
        },
        {
          type: "paragraph",
          text: "The framework that's worked applies governance proportionate to risk."
        },
        {
          type: "heading2",
          text: "The Tiered Approach"
        },
        {
          type: "callout",
          title: "Tier 1: Low Impact Applications",
          items: [
            "Examples: Internal productivity tools, content recommendations, spam filtering",
            "Governance requirement: Team self-certification via standardized form",
            "Approval: Team lead sign-off",
            "Monitoring: Standard performance metrics",
            "Deployment timeline: Days"
          ]
        },
        {
          type: "callout",
          title: "Tier 2: Medium Impact Applications",
          items: [
            "Examples: Customer-facing chatbots, demand forecasting, operational analytics",
            "Governance requirement: Peer review of model design, basic fairness testing",
            "Approval: Department head sign-off",
            "Monitoring: Monthly performance reviews, user feedback tracking",
            "Deployment timeline: 1-2 weeks"
          ]
        },
        {
          type: "callout",
          title: "Tier 3: High Impact Applications",
          items: [
            "Examples: Hiring decisions, credit scoring, medical diagnosis support, fraud detection",
            "Governance requirement: Full risk assessment, bias audit, comprehensive documentation",
            "Approval: AI governance committee review",
            "Monitoring: Continuous fairness monitoring, regular third-party audits",
            "Deployment timeline: 4-8 weeks"
          ]
        },
        {
          type: "paragraph",
          text: "Approximately 80% of AI applications fall into Tier 1 or 2. By keeping those tiers genuinely lightweight, teams follow the process for routine work. When something requires Tier 3 treatment, the additional rigor is understood—because the organization hasn't applied that level of scrutiny to everything."
        },
        {
          type: "heading2",
          text: "Implementation Lessons"
        },
        {
          type: "heading3",
          text: "Governance Requires Ownership"
        },
        {
          type: "paragraph",
          text: "In both failed implementations, governance was a shared responsibility—which meant it was no one's responsibility. Every successful implementation since has designated a specific person or small team to own the governance process. They don't approve everything, but they ensure the process operates."
        },
        {
          type: "heading3",
          text: "Shadow AI Is the Primary Risk"
        },
        {
          type: "paragraph",
          text: "One client discovered that employees had built 23 AI-powered tools using low-code platforms and external APIs—completely outside IT visibility. These weren't malicious; people were solving problems. But none had any governance coverage."
        },
        {
          type: "paragraph",
          text: "We now begin every governance engagement with an AI inventory. Organizations cannot govern what they don't know exists."
        },
        {
          type: "heading3",
          text: "Positioning Matters"
        },
        {
          type: "paragraph",
          text: "If governance is perceived as the department that blocks projects, teams will route around it. We've found success positioning governance as \"how to deploy AI safely\" rather than \"how to get approval to deploy AI.\" The activities are identical; the framing affects adoption significantly."
        },
        {
          type: "heading2",
          text: "Case Example"
        },
        {
          type: "paragraph",
          text: "A recent engagement illustrates how this framework operates in practice. A logistics company was deploying AI for route optimization."
        },
        {
          type: "paragraph",
          text: "**Initial assessment:** The team classified it as Tier 1—an internal operational efficiency tool. Upon review, we reclassified to Tier 2 because recommendations directly affected driver schedules, representing medium impact on individuals."
        },
        {
          type: "paragraph",
          text: "**Governance applied:** Basic fairness testing to assess route equity across drivers, documentation of training data sources, monthly performance reviews comparing AI routes to human-planned alternatives."
        },
        {
          type: "paragraph",
          text: "**Finding:** The initial model consistently assigned shorter routes to more experienced drivers, creating a feedback loop where newer drivers received worse routes, performed worse as a result, and appeared less capable. This was caught in testing and corrected before deployment."
        },
        {
          type: "paragraph",
          text: "**Total governance overhead:** Approximately two weeks. The alternative—discovering the bias in production—would have damaged workforce relationships and potentially triggered discrimination concerns."
        },
        {
          type: "heading2",
          text: "Implementation Sequence"
        },
        {
          type: "paragraph",
          text: "For organizations building governance from scratch, we recommend this sequence:"
        },
        {
          type: "list",
          items: [
            "Week 1: Conduct an AI inventory. Organizations typically have more AI in use than leadership realizes, particularly when counting vendor tools and low-code solutions.",
            "Week 2: Define risk tiers. Three tiers is usually sufficient—additional granularity adds complexity without proportionate benefit.",
            "Week 3: Create a one-page guide for each tier specifying requirements and approval authority.",
            "Week 4: Pilot with one project at each tier level. Identify what doesn't work in practice.",
            "Month 2 onward: Iterate based on feedback. Governance frameworks that don't evolve become stale and ignored."
          ]
        },
        {
          type: "paragraph",
          text: "Note what's not in this sequence: forming a committee. Committees are useful for Tier 3 approvals, but they're not required to start. Establish the process first; add the committee when there's something for them to review."
        },
        {
          type: "heading2",
          text: "Realistic Expectations"
        },
        {
          type: "paragraph",
          text: "Effective AI governance requires investment. It adds time to projects. It requires dedicated resources. There's no approach that eliminates this overhead."
        },
        {
          type: "paragraph",
          text: "However, the alternative—moving quickly without governance and hoping nothing goes wrong—isn't actually faster. It front-loads the speed and back-loads the consequences. Organizations that have experienced an AI bias incident or regulatory investigation consistently report they would have preferred investing in governance earlier."
        },
        {
          type: "paragraph",
          text: "The objective isn't perfect governance on day one. It's governance that improves over time and that people actually follow. Start with something workable, learn from what doesn't function as intended, and iterate. That approach has worked across our subsequent implementations."
        }
      ]
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const renderContent = () => {
    return post.content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          // Handle inline bold with **text**
          const parts = block.text.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={index} className="text-gray-600 mb-5 leading-relaxed text-lg">
              {parts.map((part, idx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={idx} className="text-gray-800">{part.slice(2, -2)}</strong>;
                }
                return part;
              })}
            </p>
          );

        case 'heading2':
          return (
            <h2 key={index} className="text-2xl font-tektur text-gray-800 mt-10 mb-4">
              {block.text}
            </h2>
          );

        case 'heading3':
          return (
            <h3 key={index} className="text-xl font-tektur text-gray-800 mt-8 mb-3">
              {block.text}
            </h3>
          );

        case 'list':
          return (
            <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-gray-600 text-lg">
              {block.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          );

        case 'callout':
          return (
            <div
              key={index}
              className="rounded-xl p-5 mb-6"
              style={{
                background: 'linear-gradient(180deg, rgba(11, 79, 136, 0.06) 0%, rgba(255, 255, 255, 0) 100%)',
                boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.12)'
              }}
            >
              <h4 className="font-tektur text-[#0B4F88] mb-3">{block.title}</h4>
              <ul className="space-y-2">
                {block.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start gap-2">
                    <span className="text-[#0B4F88] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

        case 'quote':
          return (
            <blockquote
              key={index}
              className="my-8 pl-6 relative"
              style={{ borderLeft: '3px solid #0B4F88' }}
            >
              <FaQuoteLeft className="absolute -left-3 -top-2 text-[#0B4F88]/20 text-2xl" />
              <p className="text-xl text-gray-700 italic mb-2 leading-relaxed">
                "{block.text}"
              </p>
              {block.author && (
                <cite className="text-sm text-gray-500 not-italic">— {block.author}</cite>
              )}
            </blockquote>
          );

        default:
          return null;
      }
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <main className="py-10">
      <Helmet>
        <title>{post.title} | Greyquill Software Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://greyquill.io/blog/${slug}`} />
      </Helmet>

      <nav aria-label="Breadcrumb" className="text-left mb-6">
        <Link to="/blog" className="text-[#0B4F88] hover:underline flex items-center gap-2">
          <FaArrowLeft className="text-sm" />
          Back to Blog
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Article Header */}
        <header className="mb-10">
          <span
            className="inline-block text-xs px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(11, 79, 136, 0.1)', color: '#0B4F88' }}
          >
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-tektur text-gray-800 mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-500 mb-6">
            {post.excerpt}
          </p>
          <div
            className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6"
            style={{ borderBottom: '1px solid rgba(11, 79, 136, 0.1)' }}
          >
            <span className="flex items-center gap-2">
              <FaUser className="text-[#0B4F88]" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#0B4F88]" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock className="text-[#0B4F88]" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {renderContent()}
        </div>

        {/* Share Section */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(11, 79, 136, 0.1)' }}
        >
          <p className="text-gray-600 font-medium">Share this article</p>
          <div className="flex gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0B4F88]/10 flex items-center justify-center text-[#0B4F88] hover:bg-[#0B4F88] hover:text-white transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#0B4F88]/10 flex items-center justify-center text-[#0B4F88] hover:bg-[#0B4F88] hover:text-white transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </a>
            <button
              onClick={copyLink}
              className="w-10 h-10 rounded-full bg-[#0B4F88]/10 flex items-center justify-center text-[#0B4F88] hover:bg-[#0B4F88] hover:text-white transition-colors"
              aria-label="Copy link"
            >
              <FaLink />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <section
          className="mt-10 rounded-xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 79, 136, 0.08) 0%, rgba(11, 79, 136, 0.02) 100%)',
            boxShadow: 'inset 0 0 0 1px rgba(11, 79, 136, 0.1)'
          }}
        >
          <h2 className="text-2xl font-tektur text-gray-800 mb-4">Exploring Similar Challenges?</h2>
          <p className="text-gray-600 mb-6">
            Every organization's context is different. If you're navigating these decisions, we're available to discuss your specific situation.
          </p>
          <BookDiscoveryCallButton />
        </section>
      </article>
    </main>
  );
};

export default BlogPost;
