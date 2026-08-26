import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* ============================================================
   SHREE MANGAL MURTI TRADERS
   V3 - ADVANCED BUSINESS / LEAD GENERATION WEBSITE
   ============================================================ */

/* ============================================================
   BUSINESS CONFIGURATION
   ============================================================ */

const BUSINESS_NAME = "Shree Mangal Murti Traders";

const WHATSAPP_NUMBER = "919699214019";
const BUSINESS_PHONE = "+919699214019";

const BUSINESS_EMAIL = "info@shreemangalmurti.com";

const BUSINESS_ADDRESS =
  "Bhosari Nigdi Telco Road, MIDC Gawalimatha Chowk, Anukul Chowk, Pune - 411026";

const GOOGLE_MAPS_EMBED = "your-google-maps-embed-url";

const GOOGLE_MAPS_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(BUSINESS_ADDRESS);

const GOOGLE_REVIEW_URL = GOOGLE_MAPS_SEARCH_URL;

/* Replace these with your real social links */
const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  facebook: "https://facebook.com/",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",
};

/*
  REAL GALLERY:
  Replace these URLs with your actual business/project images.

  Recommended:
  /gallery/shop.jpg
  /gallery/warehouse.jpg
  /gallery/materials.jpg
  /gallery/delivery.jpg

  The fallback emoji will still display if an image is unavailable.
*/
const galleryImages = [
  {
    id: 1,
    src: "/gallery/shop.jpg",
    emoji: "🏪",
    title: "Our Business",
    alt: "Shree Mangal Murti Traders",
  },
  {
    id: 2,
    src: "/gallery/warehouse.jpg",
    emoji: "🏭",
    title: "Material Warehouse",
    alt: "Building material warehouse",
  },
  {
    id: 3,
    src: "/gallery/materials.jpg",
    emoji: "🧱",
    title: "Building Materials",
    alt: "Construction materials",
  },
  {
    id: 4,
    src: "/gallery/steel.jpg",
    emoji: "🔩",
    title: "Steel Materials",
    alt: "TMT steel materials",
  },
  {
    id: 5,
    src: "/gallery/plywood.jpg",
    emoji: "🪵",
    title: "Plywood Section",
    alt: "Plywood materials",
  },
  {
    id: 6,
    src: "/gallery/delivery.jpg",
    emoji: "🚚",
    title: "Delivery",
    alt: "Construction material delivery",
  },
];

/* ============================================================
   PRODUCTS
   ============================================================ */

const products = [
  {
    id: 1,
    icon: "🧱",
    title: "Cement",
    desc: "Premium quality cement for strong foundations and durable construction.",
    category: "Cement",
    availability: "In Stock",
    brands: ["UltraTech", "ACC", "Ambuja"],
    unit: "Bag",
    keywords: "cement construction concrete foundation",
  },
  {
    id: 2,
    icon: "🔩",
    title: "TMT Steel",
    desc: "High-strength TMT bars and steel sections for reinforced concrete.",
    category: "Steel",
    availability: "In Stock",
    brands: ["Tata Tiscon", "JSW", "Jindal"],
    unit: "Ton",
    keywords: "steel tmt rod sariya bars",
  },
  {
    id: 3,
    icon: "🪵",
    title: "Plywood",
    desc: "Premium plywood, boards and hardware for interior and exterior work.",
    category: "Hardware",
    availability: "In Stock",
    brands: ["CenturyPly", "Greenply", "Archidply"],
    unit: "Sheet",
    keywords: "plywood board wood interior",
  },
  {
    id: 4,
    icon: "🚿",
    title: "Sanitaryware",
    desc: "Modern bathroom fittings, sanitaryware and plumbing essentials.",
    category: "Sanitary",
    availability: "In Stock",
    brands: ["Jaquar", "Hindware", "Kohler"],
    unit: "Piece",
    keywords: "bathroom sanitary toilet basin",
  },
  {
    id: 5,
    icon: "⚡",
    title: "Electrical",
    desc: "Quality electrical accessories, wires, switches and lighting solutions.",
    category: "Electrical",
    availability: "Limited Stock",
    brands: ["Anchor", "Havells", "Polycab"],
    unit: "Piece",
    keywords: "electrical wire switch lighting",
  },
  {
    id: 6,
    icon: "🏗️",
    title: "Construction Aggregates",
    desc: "Sand, aggregate, bricks and other essential construction materials.",
    category: "Aggregates",
    availability: "In Stock",
    brands: ["Local Suppliers", "Quarry Materials"],
    unit: "Ton",
    keywords: "sand aggregate bricks construction",
  },
  {
    id: 7,
    icon: "🎨",
    title: "Paint & Finishing",
    desc: "Quality paints, primers and finishing materials for your project.",
    category: "Paint",
    availability: "In Stock",
    brands: ["Asian Paints", "Berger", "Nerolac"],
    unit: "Litre",
    keywords: "paint primer wall colour finishing",
  },
  {
    id: 8,
    icon: "💧",
    title: "Plumbing Pipes",
    desc: "CPVC, PVC and GI pipes along with fittings for plumbing systems.",
    category: "Plumbing",
    availability: "In Stock",
    brands: ["Astral", "Finolex", "Supreme"],
    unit: "Piece",
    keywords: "pipe pvc cpvc plumbing fittings",
  },
  {
    id: 9,
    icon: "🪟",
    title: "Glass & Hardware",
    desc: "Glass sheets, aluminum sections and door/window hardware.",
    category: "Hardware",
    availability: "Contact for Availability",
    brands: ["Saint-Gobain", "Alco", "Jindal"],
    unit: "Piece",
    keywords: "glass aluminium door window hardware",
  },
];

/* ============================================================
   BRANDS
   ============================================================ */

const brands = [
  "UltraTech",
  "ACC",
  "Ambuja",
  "Tata Tiscon",
  "JSW Steel",
  "Jindal",
  "CenturyPly",
  "Greenply",
  "Astral",
  "Finolex",
  "Asian Paints",
  "Berger",
];

/* ============================================================
   DELIVERY AREAS
   ============================================================ */

const deliveryAreas = [
  "Bhosari",
  "Nigdi",
  "Pimpri",
  "Chinchwad",
  "Akurdi",
  "Moshi",
  "Talegaon",
  "Chakan",
  "Alandi",
  "Pune",
  "PCMC",
];

/* ============================================================
   FAQ
   ============================================================ */

const faqs = [
  {
    q: "What materials do you supply?",
    a: "We supply cement, TMT steel, plywood, sanitaryware, electrical materials, aggregates, paints, plumbing pipes and hardware.",
  },
  {
    q: "Do you provide bulk material quotations?",
    a: "Yes. You can add multiple products to the Bulk Quote Builder and send the complete requirement through WhatsApp.",
  },
  {
    q: "Do you deliver construction materials?",
    a: "Delivery availability depends on location, material and order quantity. Contact us with your project location for confirmation.",
  },
  {
    q: "How can I get the best price?",
    a: "Use the Get Best Price option and share your material, quantity and delivery location. We can then review your requirement.",
  },
  {
    q: "Can I enquire about multiple products together?",
    a: "Yes. Use Request Bulk Quote to add multiple products and quantities before sending the enquiry.",
  },
];

/* ============================================================
   TRANSLATIONS
   ============================================================ */

const translations = {
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    brands: "Brands",
    gallery: "Gallery",
    reviews: "Reviews",
    faq: "FAQ",
    contact: "Contact",
    quote: "Get Quote",
    bestPrice: "Get Best Price",
    bulkQuote: "Request Bulk Quote",
    search: "Search materials...",
    all: "All",
    categories: "Categories",
    whatsapp: "Chat on WhatsApp",
    call: "Call Now",
    directions: "Get Directions",
  },

  hi: {
    home: "होम",
    about: "हमारे बारे में",
    products: "उत्पाद",
    brands: "ब्रांड",
    gallery: "गैलरी",
    reviews: "रिव्यू",
    faq: "सवाल",
    contact: "संपर्क",
    quote: "कोट मांगें",
    bestPrice: "बेस्ट प्राइस लें",
    bulkQuote: "बल्क कोट मांगें",
    search: "सामग्री खोजें...",
    all: "सभी",
    categories: "श्रेणियाँ",
    whatsapp: "व्हाट्सऐप पर बात करें",
    call: "कॉल करें",
    directions: "दिशा देखें",
  },

  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    products: "उत्पादने",
    brands: "ब्रँड",
    gallery: "गॅलरी",
    reviews: "पुनरावलोकने",
    faq: "प्रश्न",
    contact: "संपर्क",
    quote: "कोट मागवा",
    bestPrice: "बेस्ट किंमत मिळवा",
    bulkQuote: "बल्क कोट मागवा",
    search: "साहित्य शोधा...",
    all: "सर्व",
    categories: "वर्ग",
    whatsapp: "व्हॉट्सॲपवर बोला",
    call: "कॉल करा",
    directions: "मार्ग मिळवा",
  },
};

/* ============================================================
   TRACKING HELPERS
   ============================================================ */

function getTrackingData() {
  const params = new URLSearchParams(window.location.search);

  const current = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
    referral: params.get("ref") || params.get("referral") || "",
    landingPage: window.location.pathname,
    firstSeen: new Date().toISOString(),
  };

  const old = localStorage.getItem("smm_tracking");

  if (old) {
    try {
      return {
        ...JSON.parse(old),
        ...Object.fromEntries(
          Object.entries(current).filter(([, value]) => value)
        ),
      };
    } catch {
      return current;
    }
  }

  return current;
}

function saveTrackingData() {
  const data = getTrackingData();
  localStorage.setItem("smm_tracking", JSON.stringify(data));
  return data;
}

function trackEvent(eventName, details = {}) {
  const events = JSON.parse(
    localStorage.getItem("smm_events") || "[]"
  );

  events.push({
    event: eventName,
    details,
    tracking: getTrackingData(),
    timestamp: new Date().toISOString(),
  });

  localStorage.setItem(
    "smm_events",
    JSON.stringify(events.slice(-100))
  );
}

/* ============================================================
   SEO
   ============================================================ */

function setupSEO() {
  document.title =
    "Shree Mangal Murti Traders | Building Materials Supplier in Pune";

  const description =
    "Shree Mangal Murti Traders supplies cement, TMT steel, plywood, sanitaryware, electrical, plumbing, paints and construction materials in Pune.";

  const keywords =
    "building material supplier Pune, cement supplier Pune, TMT steel Pune, construction material Bhosari, building materials PCMC";

  const setMeta = (name, content, property = false) => {
    const attribute = property ? "property" : "name";

    let element = document.head.querySelector(
      `meta[${attribute}="${name}"]`
    );

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  setMeta("description", description);
  setMeta("keywords", keywords);
  setMeta("robots", "index, follow");
  setMeta("theme-color", "#f97316");

  setMeta("og:title", document.title, true);
  setMeta("og:description", description, true);
  setMeta("og:type", "website", true);
  setMeta("og:url", window.location.href, true);

  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", document.title);
  setMeta("twitter:description", description);

  let canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = window.location.origin + "/";
}

/* ============================================================
   JSON-LD
   ============================================================ */

function setupStructuredData() {
  const existing = document.getElementById(
    "business-structured-data"
  );

  if (existing) existing.remove();

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description:
      "Building material supplier serving Pune and surrounding areas.",
    url: window.location.origin,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411026",
      addressCountry: "IN",
    },
    areaServed: [
      "Pune",
      "PCMC",
      "Bhosari",
      "Nigdi",
      "Pimpri",
      "Chinchwad",
      "Moshi",
      "Chakan",
    ],
    priceRange: "$$",
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const script = document.createElement("script");
  script.id = "business-structured-data";
  script.type = "application/ld+json";

  script.textContent = JSON.stringify([
    businessSchema,
    faqSchema,
  ]);

  document.head.appendChild(script);
}

/* ============================================================
   APP
   ============================================================ */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("smm_dark") === "true"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("smm_language") || "en"
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [productModal, setProductModal] = useState(false);

  const [galleryImage, setGalleryImage] =
    useState(null);

  const [bulkItems, setBulkItems] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("smm_bulk") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [bulkModal, setBulkModal] = useState(false);

  const [activeFAQ, setActiveFAQ] = useState(null);

  const [showTop, setShowTop] = useState(false);

  const [loading, setLoading] = useState(true);

  const [copied, setCopied] = useState("");

  const [quote, setQuote] = useState({
    name: "",
    phone: "",
    email: "",
    material: "",
    quantity: "",
    location: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const [counters, setCounters] = useState({
    projects: 0,
    customers: 0,
    materials: 0,
  });

  const [is404, setIs404] = useState(false);

  const lang = translations[language] || translations.en;

  /* ============================================================
     INITIALIZATION
     ============================================================ */

  useEffect(() => {
    saveTrackingData();
    setupSEO();
    setupStructuredData();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /* ============================================================
     404 HANDLING
     ============================================================ */

  useEffect(() => {
    const validPaths = ["/", ""];

    if (!validPaths.includes(window.location.pathname)) {
      setIs404(true);
    }
  }, []);

  /* ============================================================
     DARK MODE
     ============================================================ */

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    localStorage.setItem(
      "smm_dark",
      String(darkMode)
    );
  }, [darkMode]);

  /* ============================================================
     LANGUAGE
     ============================================================ */

  useEffect(() => {
    localStorage.setItem(
      "smm_language",
      language
    );

    document.documentElement.lang = language;
  }, [language]);

  /* ============================================================
     BULK STORAGE
     ============================================================ */

  useEffect(() => {
    localStorage.setItem(
      "smm_bulk",
      JSON.stringify(bulkItems)
    );
  }, [bulkItems]);

  /* ============================================================
     SCROLL
     ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* ============================================================
     COUNTERS
     ============================================================ */

  useEffect(() => {
    if (loading) return;

    const targets = {
      projects: 120,
      customers: 450,
      materials: 2000,
    };

    const duration = 1800;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min(
        (now - startTime) / duration,
        1
      );

      const ease =
        1 - Math.pow(1 - progress, 3);

      setCounters({
        projects: Math.floor(
          targets.projects * ease
        ),
        customers: Math.floor(
          targets.customers * ease
        ),
        materials: Math.floor(
          targets.materials * ease
        ),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [loading]);

  /* ============================================================
     FILTERS
     ============================================================ */

  const categories = useMemo(
    () => [
      "All",
      ...new Set(products.map((p) => p.category)),
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    const search = searchTerm
      .trim()
      .toLowerCase();

    return products.filter((product) => {
      const text = [
        product.title,
        product.desc,
        product.category,
        product.keywords,
        ...product.brands,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !search || text.includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [searchTerm, selectedCategory]);

  /* ============================================================
     COMMON ACTIONS
     ============================================================ */

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id) => {
    closeMenu();

    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  /* ============================================================
     WHATSAPP
     ============================================================ */

  const openWhatsApp = (
    message = "",
    product = null,
    source = "general"
  ) => {
    const defaultMessage =
      `Hello ${BUSINESS_NAME}, I am interested in your building materials.`;

    let finalMessage =
      message || defaultMessage;

    if (product) {
      finalMessage =
        `Hello ${BUSINESS_NAME},

I am interested in:
Product: ${product.title}
Category: ${product.category}
Unit: ${product.unit}

Please share your best price and availability.

Source: Product Enquiry`;

      trackEvent(
        "product_whatsapp_click",
        {
          product: product.title,
          source,
        }
      );
    } else {
      trackEvent(
        "whatsapp_click",
        { source }
      );
    }

    const tracking = getTrackingData();

    finalMessage += `

---
Website Source:
${tracking.utm_source || "Direct"}
Campaign:
${tracking.utm_campaign || "Direct"}
Referral:
${tracking.referral || "None"}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        finalMessage
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ============================================================
     CALL
     ============================================================ */

  const makeCall = () => {
    trackEvent("phone_click");

    window.location.href =
      `tel:${BUSINESS_PHONE}`;
  };

  /* ============================================================
     MAP
     ============================================================ */

  const getDirections = () => {
    trackEvent("directions_click");

    window.open(
      GOOGLE_MAPS_SEARCH_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ============================================================
     COPY
     ============================================================ */

  const copyText = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      trackEvent("copy_click", {
        type,
      });

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch {
      window.prompt(
        "Copy this:",
        value
      );
    }
  };

  /* ============================================================
     PRODUCT ACTIONS
     ============================================================ */

  const addToBulk = (product) => {
    setBulkItems((previous) => {
      const existing =
        previous.find(
          (item) =>
            item.id === product.id
        );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 0) +
                  1,
              }
            : item
        );
      }

      return [
        ...previous,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    trackEvent("add_bulk_product", {
      product: product.title,
    });
  };

  const removeFromBulk = (id) => {
    setBulkItems((items) =>
      items.filter(
        (item) => item.id !== id
      )
    );
  };

  const updateBulkQty = (
    id,
    value
  ) => {
    const quantity = Math.max(
      1,
      Number(value) || 1
    );

    setBulkItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  /* ============================================================
     PRODUCT AVAILABILITY
     ============================================================ */

  const getAvailabilityClass = (
    status
  ) => {
    if (status === "In Stock")
      return "stockGood";

    if (status === "Limited Stock")
      return "stockLimited";

    return "stockContact";
  };

  /* ============================================================
     BULK SUBMIT
     ============================================================ */

  const submitBulkQuote = () => {
    if (!bulkItems.length) return;

    let message =
      `Hello ${BUSINESS_NAME},

📦 BULK MATERIAL QUOTE REQUEST

`;

    bulkItems.forEach(
      (item, index) => {
        message += `${index + 1}. ${
          item.title
        } - ${
          item.quantity
        } ${item.unit}
`;
      }
    );

    message += `
📍 Delivery Location:
${
  quote.location ||
  "Please confirm location"
}

👤 Name:
${
  quote.name ||
  "Not provided"
}

📞 Phone:
${
  quote.phone ||
  "Not provided"
}

Please share your best bulk price and availability.`;

    trackEvent(
      "bulk_quote_whatsapp",
      {
        items: bulkItems.map(
          (item) => item.title
        ),
      }
    );

    openWhatsApp(
      message,
      null,
      "bulk_quote"
    );

    setBulkItems([]);
    setBulkModal(false);
  };

  /* ============================================================
     ADVANCED QUOTE SUBMIT
     ============================================================ */

  const submitQuote = (event) => {
    event.preventDefault();

    const tracking =
      getTrackingData();

    const message =
      `Hello ${BUSINESS_NAME},

🧾 NEW QUOTATION REQUEST

👤 Name:
${quote.name}

📞 Phone:
${quote.phone}

📧 Email:
${quote.email || "Not provided"}

📦 Material:
${quote.material || "Not specified"}

📊 Quantity:
${quote.quantity || "Not specified"}

📍 Project Location:
${quote.location || "Not specified"}

📝 Requirement:
${quote.message || "Please contact me."}

---
UTM Source:
${tracking.utm_source || "Direct"}

UTM Medium:
${tracking.utm_medium || "Direct"}

Campaign:
${tracking.utm_campaign || "Direct"}

Referral:
${tracking.referral || "None"}`;

    trackEvent(
      "quotation_submit",
      {
        material:
          quote.material,
        location:
          quote.location,
      }
    );

    openWhatsApp(
      message,
      null,
      "quotation"
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  /* ============================================================
     LOADER
     ============================================================ */

  if (loading) {
    return (
      <div className="loaderScreen">
        <div className="loaderBox">
          <div className="loaderLogo">
            ॐ
          </div>

          <h1>
            श्री मंगल मूर्ती
          </h1>

          <span>
            TRADERS
          </span>

          <div className="loaderProgress">
            <div />
          </div>

          <p>
            Building better connections...
          </p>
        </div>
      </div>
    );
  }

  /* ============================================================
     404 PAGE
     ============================================================ */

  if (is404) {
    return (
      <div className="notFoundPage">
        <div>
          <div className="notFoundNumber">
            404
          </div>

          <h1>
            Page Not Found
          </h1>

          <p>
            The page you are looking for
            doesn't exist.
          </p>

          <a
            href="/"
            className="primaryButton"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      {/* ======================================================
          TOP BAR
          ====================================================== */}

      <div className="topBar">
        <div className="container topBarInner">

          <span>
            📍 Pune • PCMC
          </span>

          <span className="topBarMessage">
            Quality • Trust • Service •
            Competitive Pricing
          </span>

          <div className="topBarActions">

            <button
              className="iconButton"
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              aria-label="Toggle dark mode"
            >
              {darkMode
                ? "☀️"
                : "🌙"}
            </button>

            <select
              value={language}
              onChange={(e) =>
                setLanguage(
                  e.target.value
                )
              }
              aria-label="Select language"
              className="languageSelect"
            >
              <option value="en">
                English
              </option>

              <option value="hi">
                हिंदी
              </option>

              <option value="mr">
                मराठी
              </option>
            </select>

          </div>
        </div>
      </div>

      {/* ======================================================
          HEADER
          ====================================================== */}

      <header className="header">

        <div className="container headerInner">

          <a
            href="#home"
            className="brand"
            onClick={closeMenu}
            aria-label={BUSINESS_NAME}
          >
            <span className="brandLogo">
              ॐ
            </span>

            <span className="brandText">
              <strong>
                श्री मंगल मूर्ती
              </strong>

              <small>
                TRADERS
              </small>
            </span>
          </a>

          <button
            className="menuButton"
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
            }
            aria-label="Open navigation"
            aria-expanded={
              menuOpen
            }
          >
            {menuOpen
              ? "✕"
              : "☰"}
          </button>

          <nav
            className={
              menuOpen
                ? "mainNav open"
                : "mainNav"
            }
          >

            <a
              href="#home"
              onClick={closeMenu}
            >
              {lang.home}
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              {lang.about}
            </a>

            <a
              href="#products"
              onClick={closeMenu}
            >
              {lang.products}
            </a>

            <a
              href="#brands"
              onClick={closeMenu}
            >
              {lang.brands}
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
            >
              {lang.gallery}
            </a>

            <a
              href="#reviews"
              onClick={closeMenu}
            >
              {lang.reviews}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              {lang.contact}
            </a>

            <a
              href="#quote"
              className="navQuote"
              onClick={closeMenu}
            >
              {lang.quote}
            </a>

          </nav>

        </div>
      </header>

      <main id="home">

        {/* ====================================================
            HERO
            ==================================================== */}

        <section className="heroSection">

          <div className="heroGlow heroGlowOne" />
          <div className="heroGlow heroGlowTwo" />

          <div className="container heroGrid">

            <div className="heroContent">

              <div className="heroBadge">
                <span>✦</span>
                TRUSTED BUILDING MATERIAL
                SUPPLIER
              </div>

              <p className="heroHindi">
                श्री मंगल मूर्ती ट्रेडर्स
              </p>

              <h1>
                Everything You Need
                To{" "}
                <span>
                  Build Better.
                </span>
              </h1>

              <p className="heroLead">
                Reliable building and
                construction materials
                for residential,
                commercial and
                infrastructure projects
                in Pune.
              </p>

              <div className="heroActions">

                <a
                  href="#quote"
                  className="primaryButton"
                  onClick={() =>
                    trackEvent(
                      "hero_quote_click"
                    )
                  }
                >
                  {lang.bestPrice}
                  <span>→</span>
                </a>

                <button
                  className="whatsappButton"
                  onClick={() =>
                    openWhatsApp(
                      "",
                      null,
                      "hero"
                    )
                  }
                >
                  💬{" "}
                  {lang.whatsapp}
                </button>

              </div>

              <div className="heroTrust">

                <div>
                  <strong>
                    ✓
                  </strong>
                  Verified Enquiry
                </div>

                <div>
                  <strong>
                    ✓
                  </strong>
                  Bulk Orders
                </div>

                <div>
                  <strong>
                    ✓
                  </strong>
                  Local Delivery
                </div>

              </div>

              <div className="counterGrid">

                <div>
                  <strong>
                    {counters.projects}+
                  </strong>

                  <span>
                    Projects
                  </span>
                </div>

                <div>
                  <strong>
                    {counters.customers}+
                  </strong>

                  <span>
                    Customers
                  </span>
                </div>

                <div>
                  <strong>
                    {counters.materials}+
                  </strong>

                  <span>
                    Material Options
                  </span>
                </div>

              </div>

            </div>

            <div className="heroVisual">

              <div className="heroCardMain">

                <div className="heroCardTop">
                  <span>
                    BUILD WITH
                  </span>

                  <strong>
                    CONFIDENCE
                  </strong>
                </div>

                <div className="heroConstruction">
                  🏗️
                </div>

                <div className="floatingMaterial materialOne">
                  🧱
                </div>

                <div className="floatingMaterial materialTwo">
                  🔩
                </div>

                <div className="floatingMaterial materialThree">
                  🪵
                </div>

                <div className="floatingMaterial materialFour">
                  🚿
                </div>

                <div className="heroMiniCard">
                  <span>
                    ✓
                  </span>

                  <div>
                    <strong>
                      Quality Materials
                    </strong>

                    <small>
                      For every project
                    </small>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ====================================================
            TICKER
            ==================================================== */}

        <div className="ticker">
          <div className="tickerTrack">
            CEMENT ✦ TMT STEEL ✦
            PLYWOOD ✦ SANITARYWARE ✦
            ELECTRICAL ✦ PAINTS ✦
            PLUMBING ✦ HARDWARE ✦
            AGGREGATES ✦
          </div>
        </div>

        {/* ====================================================
            TRUST BADGES
            ==================================================== */}

        <section className="trustSection">

          <div className="container trustGrid">

            <div className="trustCard">
              <span>🏆</span>

              <div>
                <strong>
                  Quality Materials
                </strong>

                <p>
                  Reliable products
                  for your project.
                </p>
              </div>
            </div>

            <div className="trustCard">
              <span>₹</span>

              <div>
                <strong>
                  Competitive Pricing
                </strong>

                <p>
                  Request pricing
                  before ordering.
                </p>
              </div>
            </div>

            <div className="trustCard">
              <span>⚡</span>

              <div>
                <strong>
                  Fast Response
                </strong>

                <p>
                  Quick quotation
                  assistance.
                </p>
              </div>
            </div>

            <div className="trustCard">
              <span>🚚</span>

              <div>
                <strong>
                  Delivery Support
                </strong>

                <p>
                  Local delivery
                  assistance.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ====================================================
            ABOUT
            ==================================================== */}

        <section
          id="about"
          className="section"
        >

          <div className="container splitSection">

            <div>
              <div className="eyebrow">
                ABOUT OUR BUSINESS
              </div>

              <h2>
                Your practical partner
                for construction
                material sourcing.
              </h2>
            </div>

            <div className="aboutContent">

              <p>
                <strong>
                  Shree Mangal Murti
                  Traders
                </strong>{" "}
                supplies essential
                building and
                construction materials
                for residential,
                commercial and
                project requirements.
              </p>

              <p>
                Our goal is to make
                material sourcing
                simple by providing
                product choices,
                quotation support,
                bulk enquiry options
                and convenient
                WhatsApp communication.
              </p>

              <button
                className="textButton"
                onClick={() =>
                  openWhatsApp(
                    "",
                    null,
                    "about"
                  )
                }
              >
                Talk to our team →
              </button>

            </div>

          </div>
        </section>

        {/* ====================================================
            PRODUCTS
            ==================================================== */}

        <section
          id="products"
          className="section productsSection"
        >

          <div className="container">

            <div className="sectionHeading">

              <div>
                <div className="eyebrow">
                  OUR PRODUCTS
                </div>

                <h2>
                  Materials for every
                  stage of construction.
                </h2>
              </div>

              <p>
                Search products, filter
                categories and create
                a bulk quotation.
              </p>

            </div>

            {/* SEARCH TOOLBAR */}

            <div className="productToolbar">

              <div className="searchBox">

                <span>
                  🔎
                </span>

                <input
                  type="search"
                  placeholder={
                    lang.search
                  }
                  value={
                    searchTerm
                  }
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  aria-label="Search products"
                />

                {searchTerm && (
                  <button
                    onClick={() =>
                      setSearchTerm(
                        ""
                      )
                    }
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}

              </div>

              <div className="categoryBox">

                <span>
                  📂
                </span>

                <select
                  value={
                    selectedCategory
                  }
                  onChange={(e) =>
                    setSelectedCategory(
                      e.target.value
                    )
                  }
                  aria-label="Product category"
                >
                  {categories.map(
                    (category) => (
                      <option
                        key={category}
                        value={category}
                      >
                        {category ===
                        "All"
                          ? lang.all
                          : category}
                      </option>
                    )
                  )}
                </select>

              </div>

              <button
                className="bulkToolbarButton"
                onClick={() =>
                  setBulkModal(true)
                }
              >
                📦{" "}
                {lang.bulkQuote}
                <b>
                  {bulkItems.length}
                </b>
              </button>

            </div>

            {/* PRODUCT GRID */}

            {filteredProducts.length ===
            0 ? (
              <div className="emptyProducts">
                <span>
                  🔍
                </span>

                <h3>
                  No products found
                </h3>

                <p>
                  Try another product
                  or category.
                </p>
              </div>
            ) : (
              <div className="productGrid">

                {filteredProducts.map(
                  (product, index) => (
                    <article
                      className="productCard"
                      key={product.id}
                    >

                      <div className="productNumber">
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </div>

                      <div className="productIcon">
                        {
                          product.icon
                        }
                      </div>

                      <div className="productTitleRow">

                        <h3>
                          {
                            product.title
                          }
                        </h3>

                        <span
                          className={`stockBadge ${getAvailabilityClass(
                            product.availability
                          )}`}
                        >
                          ●{" "}
                          {
                            product.availability
                          }
                        </span>

                      </div>

                      <p>
                        {
                          product.desc
                        }
                      </p>

                      <div className="brandTags">

                        {product.brands.map(
                          (brand) => (
                            <span
                              key={brand}
                            >
                              {brand}
                            </span>
                          )
                        )}

                      </div>

                      <div className="productFooter">

                        <small>
                          Unit:{" "}
                          <strong>
                            {
                              product.unit
                            }
                          </strong>
                        </small>

                        <div>

                          <button
                            className="outlineButton"
                            onClick={() => {
                              setSelectedProduct(
                                product
                              );
                              setProductModal(
                                true
                              );

                              trackEvent(
                                "product_view",
                                {
                                  product:
                                    product.title,
                                }
                              );
                            }}
                          >
                            Details
                          </button>

                          <button
                            className="smallAddButton"
                            onClick={() =>
                              addToBulk(
                                product
                              )
                            }
                          >
                            + Add
                          </button>

                        </div>

                      </div>

                    </article>
                  )
                )}

              </div>
            )}

          </div>
        </section>

        {/* ====================================================
            GET BEST PRICE CTA
            ==================================================== */}

        <section className="bestPriceSection">

          <div className="container bestPriceInner">

            <div>

              <span>
                🔥 QUICK QUOTATION
              </span>

              <h2>
                Need the best price
                for your quantity?
              </h2>

              <p>
                Tell us the material,
                quantity and delivery
                location.
              </p>

            </div>

            <div className="bestPriceActions">

              <a
                href="#quote"
                className="whiteButton"
                onClick={() =>
                  trackEvent(
                    "best_price_click"
                  )
                }
              >
                Get Best Price →
              </a>

              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello ${BUSINESS_NAME},

I want to get the best price for construction materials.

Please contact me with pricing and availability.`,
                    null,
                    "best_price"
                  )
                }
                className="darkButton"
              >
                💬 WhatsApp
              </button>

            </div>

          </div>
        </section>

        {/* ====================================================
            BRANDS
            ==================================================== */}

        <section
          id="brands"
          className="section brandsSection"
        >

          <div className="container">

            <div className="centerHeading">

              <div className="eyebrow">
                BRANDS
              </div>

              <h2>
                Brands we deal in.
              </h2>

              <p>
                Brand availability may
                vary by product and
                current stock.
              </p>

            </div>

            <div className="brandsGrid">

              {brands.map(
                (brand) => (
                  <div
                    className="brandPill"
                    key={brand}
                  >
                    <span>
                      ✓
                    </span>

                    {brand}
                  </div>
                )
              )}

            </div>

          </div>
        </section>

        {/* ====================================================
            GALLERY
            ==================================================== */}

        <section
          id="gallery"
          className="section gallerySection"
        >

          <div className="container">

            <div className="sectionHeading">

              <div>

                <div className="eyebrow">
                  OUR GALLERY
                </div>

                <h2>
                  Our materials,
                  workplace and delivery.
                </h2>

              </div>

              <p>
                Replace the gallery
                images with your actual
                business photos.
              </p>

            </div>

            <div className="galleryGrid">

              {galleryImages.map(
                (image) => (
                  <button
                    className="galleryCard"
                    key={image.id}
                    onClick={() =>
                      setGalleryImage(
                        image
                      )
                    }
                    aria-label={`Open ${image.title}`}
                  >

                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display =
                          "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />

                    <span className="galleryFallback">
                      {image.emoji}
                    </span>

                    <div>
                      <strong>
                        {
                          image.title
                        }
                      </strong>

                      <small>
                        View photo →
                      </small>
                    </div>

                  </button>
                )
              )}

            </div>

          </div>
        </section>

        {/* ====================================================
            DELIVERY AREAS
            ==================================================== */}

        <section className="deliverySection">

          <div className="container deliveryGrid">

            <div>

              <div className="eyebrow light">
                DELIVERY AREA
              </div>

              <h2>
                Serving Pune &
                surrounding areas.
              </h2>

              <p>
                Delivery availability
                depends on material,
                quantity and project
                location.
              </p>

              <button
                className="deliveryButton"
                onClick={getDirections}
              >
                📍 Check Location
              </button>

            </div>

            <div className="deliveryAreas">

              {deliveryAreas.map(
                (area) => (
                  <span
                    key={area}
                  >
                    ✓ {area}
                  </span>
                )
              )}

            </div>

          </div>
        </section>

        {/* ====================================================
            WHY US
            ==================================================== */}

        <section
          id="why"
          className="section whySection"
        >

          <div className="container">

            <div className="centerHeading">

              <div className="eyebrow light">
                WHY CHOOSE US
              </div>

              <h2>
                Built around your
                project requirements.
              </h2>

            </div>

            <div className="whyGrid">

              <div className="whyCard">
                <span>
                  🏆
                </span>

                <h3>
                  Quality Focus
                </h3>

                <p>
                  Focus on dependable
                  products and brands.
                </p>
              </div>

              <div className="whyCard">
                <span>
                  ₹
                </span>

                <h3>
                  Competitive Pricing
                </h3>

                <p>
                  Request pricing based
                  on your requirement.
                </p>
              </div>

              <div className="whyCard">
                <span>
                  ⚡
                </span>

                <h3>
                  Quick Communication
                </h3>

                <p>
                  WhatsApp and phone
                  support for enquiries.
                </p>
              </div>

              <div className="whyCard">
                <span>
                  📦
                </span>

                <h3>
                  Bulk Enquiries
                </h3>

                <p>
                  Combine multiple
                  materials into one
                  quotation request.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ====================================================
            HOW IT WORKS
            ==================================================== */}

        <section className="section processSection">

          <div className="container">

            <div className="centerHeading">

              <div className="eyebrow">
                SIMPLE PROCESS
              </div>

              <h2>
                From requirement to
                quotation.
              </h2>

            </div>

            <div className="processGrid">

              <div className="processCard">
                <span>
                  01
                </span>

                <h3>
                  Send Requirement
                </h3>

                <p>
                  Tell us what material
                  you need and how much.
                </p>
              </div>

              <div className="processCard">
                <span>
                  02
                </span>

                <h3>
                  Get Pricing
                </h3>

                <p>
                  Discuss availability,
                  pricing and delivery.
                </p>
              </div>

              <div className="processCard">
                <span>
                  03
                </span>

                <h3>
                  Confirm Order
                </h3>

                <p>
                  Finalize your material
                  and delivery requirement.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ====================================================
            REVIEWS
            ==================================================== */}

        <section
          id="reviews"
          className="section reviewsSection"
        >

          <div className="container">

            <div className="sectionHeading">

              <div>

                <div className="eyebrow">
                  CUSTOMER REVIEWS
                </div>

                <h2>
                  What our customers
                  say.
                </h2>

              </div>

              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="reviewButton"
                onClick={() =>
                  trackEvent(
                    "google_reviews_click"
                  )
                }
              >
                ⭐ View Google Reviews
              </a>

            </div>

            <div className="reviewNotice">
              <span>
                ★
              </span>

              <p>
                Add your verified Google
                customer reviews here.
                Avoid publishing reviews
                that are not genuine.
              </p>
            </div>

            {/* Replace these with actual reviews */}

            <div className="reviewsGrid">

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  “Verified customer
                  review can be added
                  here.”
                </p>

                <strong>
                  Your Customer Name
                </strong>

                <small>
                  Verified Customer
                </small>

              </article>

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  “Replace this text
                  with your actual
                  Google review.”
                </p>

                <strong>
                  Your Customer Name
                </strong>

                <small>
                  Verified Customer
                </small>

              </article>

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  “Only publish genuine
                  customer feedback
                  here.”
                </p>

                <strong>
                  Your Customer Name
                </strong>

                <small>
                  Verified Customer
                </small>

              </article>

            </div>

          </div>
        </section>

        {/* ====================================================
            FAQ
            ==================================================== */}

        <section
          id="faq"
          className="section faqSection"
        >

          <div className="container faqContainer">

            <div className="centerHeading">

              <div className="eyebrow">
                FAQ
              </div>

              <h2>
                Frequently Asked
                Questions
              </h2>

            </div>

            <div className="faqList">

              {faqs.map(
                (faq, index) => (
                  <div
                    className="faqItem"
                    key={faq.q}
                  >

                    <button
                      className="faqQuestion"
                      onClick={() =>
                        setActiveFAQ(
                          activeFAQ ===
                            index
                            ? null
                            : index
                        )
                      }
                      aria-expanded={
                        activeFAQ ===
                        index
                      }
                    >

                      <span>
                        {faq.q}
                      </span>

                      <b>
                        {activeFAQ ===
                        index
                          ? "−"
                          : "+"}
                      </b>

                    </button>

                    {activeFAQ ===
                      index && (
                      <div className="faqAnswer">
                        {faq.a}
                      </div>
                    )}

                  </div>
                )
              )}

            </div>

          </div>
        </section>

        {/* ====================================================
            CTA
            ==================================================== */}

        <section className="ctaSection">

          <div className="container ctaInner">

            <div>

              <div className="eyebrow light">
                READY TO START?
              </div>

              <h2>
                Need materials for
                your next project?
              </h2>

              <p>
                Get in touch for
                pricing, availability
                and bulk requirements.
              </p>

            </div>

            <div className="ctaActions">

              <button
                className="ctaWhatsApp"
                onClick={() =>
                  openWhatsApp(
                    "",
                    null,
                    "bottom_cta"
                  )
                }
              >
                💬 WhatsApp Us
              </button>

              <button
                className="ctaCall"
                onClick={makeCall}
              >
                📞 Call Now
              </button>

            </div>

          </div>
        </section>

        {/* ====================================================
            QUOTATION BUILDER
            ==================================================== */}

        <section
          id="quote"
          className="section quoteSection"
        >

          <div className="container quoteGrid">

            <div className="quoteIntro">

              <div className="eyebrow">
                ADVANCED QUOTATION
              </div>

              <h2>
                Tell us exactly
                what you need.
              </h2>

              <p>
                Submit your requirement
                and continue directly
                through WhatsApp.
              </p>

              <div className="quoteBenefits">

                <div>
                  ✓ Product-specific
                  enquiry
                </div>

                <div>
                  ✓ Quantity & location
                </div>

                <div>
                  ✓ UTM/source tracking
                </div>

                <div>
                  ✓ Fast WhatsApp
                  communication
                </div>

              </div>

              <div className="contactMiniCard">

                <span>
                  📍
                </span>

                <div>
                  <strong>
                    Business Location
                  </strong>

                  <p>
                    {BUSINESS_ADDRESS}
                  </p>
                </div>

              </div>

            </div>

            <form
              className="quoteForm"
              onSubmit={submitQuote}
            >

              <div className="formRow">

                <label>
                  Your Name *
                  <input
                    required
                    value={
                      quote.name
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                  />
                </label>

                <label>
                  Phone Number *
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    value={
                      quote.phone
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        phone:
                          e.target.value,
                      })
                    }
                    placeholder="Enter phone number"
                  />
                </label>

              </div>

              <div className="formRow">

                <label>
                  Email
                  <input
                    type="email"
                    value={
                      quote.email
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        email:
                          e.target.value,
                      })
                    }
                    placeholder="Email address"
                  />
                </label>

                <label>
                  Material
                  <select
                    value={
                      quote.material
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        material:
                          e.target.value,
                      })
                    }
                  >
                    <option value="">
                      Select material
                    </option>

                    {products.map(
                      (product) => (
                        <option
                          key={
                            product.id
                          }
                          value={
                            product.title
                          }
                        >
                          {
                            product.title
                          }
                        </option>
                      )
                    )}

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </label>

              </div>

              <div className="formRow">

                <label>
                  Quantity
                  <input
                    value={
                      quote.quantity
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        quantity:
                          e.target.value,
                      })
                    }
                    placeholder="e.g. 500 Bags / 5 Ton"
                  />
                </label>

                <label>
                  Project Location
                  <input
                    value={
                      quote.location
                    }
                    onChange={(e) =>
                      setQuote({
                        ...quote,
                        location:
                          e.target.value,
                      })
                    }
                    placeholder="Delivery location"
                  />
                </label>

              </div>

              <label>
                Requirement Details

                <textarea
                  rows="5"
                  value={
                    quote.message
                  }
                  onChange={(e) =>
                    setQuote({
                      ...quote,
                      message:
                        e.target.value,
                    })
                  }
                  placeholder="Tell us about quantity, brand, delivery, project requirement..."
                />

              </label>

              <button
                className="submitQuoteButton"
                type="submit"
              >
                💬 Send Enquiry on WhatsApp
                <span>
                  ↗
                </span>
              </button>

              {sent && (
                <div className="successMessage">
                  ✓ Enquiry prepared. WhatsApp
                  will open with your quotation
                  request.
                </div>
              )}

            </form>

          </div>
        </section>

        {/* ====================================================
            CONTACT
            ==================================================== */}

        <section
          id="contact"
          className="contactSection"
        >

          <div className="container">

            <div className="contactGrid">

              <div className="contactCard">

                <span>
                  📍
                </span>

                <div>
                  <strong>
                    Address
                  </strong>

                  <p>
                    {
                      BUSINESS_ADDRESS
                    }
                  </p>
                </div>

              </div>

              <div className="contactCard">

                <span>
                  📞
                </span>

                <div>
                  <strong>
                    Phone
                  </strong>

                  <a
                    href={`tel:${BUSINESS_PHONE}`}
                  >
                    {
                      BUSINESS_PHONE
                    }
                  </a>
                </div>

              </div>

              <div className="contactCard">

                <span>
                  ✉️
                </span>

                <div>
                  <strong>
                    Email
                  </strong>

                  <a
                    href={`mailto:${BUSINESS_EMAIL}`}
                  >
                    {
                      BUSINESS_EMAIL
                    }
                  </a>
                </div>

              </div>

            </div>

            <div className="contactTools">

              <button
                onClick={() =>
                  copyText(
                    BUSINESS_PHONE,
                    "phone"
                  )
                }
              >
                📋{" "}
                {copied === "phone"
                  ? "Copied!"
                  : "Copy Phone"}
              </button>

              <button
                onClick={() =>
                  copyText(
                    BUSINESS_EMAIL,
                    "email"
                  )
                }
              >
                📋{" "}
                {copied === "email"
                  ? "Copied!"
                  : "Copy Email"}
              </button>

              <button
                onClick={makeCall}
              >
                📞 Call
              </button>

              <button
                onClick={() =>
                  openWhatsApp(
                    "",
                    null,
                    "contact"
                  )
                }
              >
                💬 WhatsApp
              </button>

              <button
                onClick={
                  getDirections
                }
              >
                📍 Directions
              </button>

            </div>

            <div className="mapWrapper">

              {GOOGLE_MAPS_EMBED &&
              GOOGLE_MAPS_EMBED !==
                "your-google-maps-embed-url" ? (
                <iframe
                  src={
                    GOOGLE_MAPS_EMBED
                  }
                  title={`${BUSINESS_NAME} Google Maps`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="mapPlaceholder">

                  <div>
                    <span>
                      📍
                    </span>

                    <h3>
                      Find Us in Pune
                    </h3>

                    <p>
                      {
                        BUSINESS_ADDRESS
                      }
                    </p>

                    <button
                      onClick={
                        getDirections
                      }
                      className="primaryButton"
                    >
                      Open Google Maps →
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        </section>

      </main>

      {/* ======================================================
          FOOTER
          ====================================================== */}

      <footer className="footer">

        <div className="container footerGrid">

          <div className="footerAbout">

            <a
              href="#home"
              className="brand"
            >

              <span className="brandLogo">
                ॐ
              </span>

              <span className="brandText">
                <strong>
                  श्री मंगल मूर्ती
                </strong>

                <small>
                  TRADERS
                </small>
              </span>

            </a>

            <p>
              Building materials for
              stronger foundations and
              better projects.
            </p>

            <p className="footerAddress">
              📍{" "}
              {
                BUSINESS_ADDRESS
              }
            </p>

          </div>

          <div>

            <h4>
              Quick Links
            </h4>

            <a href="#about">
              {lang.about}
            </a>

            <a href="#products">
              {lang.products}
            </a>

            <a href="#brands">
              {lang.brands}
            </a>

            <a href="#gallery">
              {lang.gallery}
            </a>

            <a href="#quote">
              {lang.quote}
            </a>

          </div>

          <div>

            <h4>
              Business
            </h4>

            <a href="#reviews">
              {lang.reviews}
            </a>

            <a href="#faq">
              {lang.faq}
            </a>

            <a href="#contact">
              {lang.contact}
            </a>

            <a
              href={
                GOOGLE_MAPS_SEARCH_URL
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>

          </div>

          <div>

            <h4>
              Contact
            </h4>

            <a
              href={`tel:${BUSINESS_PHONE}`}
            >
              📞{" "}
              {
                BUSINESS_PHONE
              }
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}`}
            >
              ✉️{" "}
              {
                BUSINESS_EMAIL
              }
            </a>

            <button
              className="footerWhatsApp"
              onClick={() =>
                openWhatsApp(
                  "",
                  null,
                  "footer"
                )
              }
            >
              💬 WhatsApp
            </button>

            <div className="socialLinks">

              <a
                href={
                  SOCIAL_LINKS.facebook
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href={
                  SOCIAL_LINKS.instagram
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href={
                  SOCIAL_LINKS.linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href={
                  SOCIAL_LINKS.whatsapp
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                W
              </a>

            </div>

          </div>

        </div>

        <div className="footerBottom">

          <div className="container footerBottomInner">

            <span>
              ©{" "}
              {new Date().getFullYear()}{" "}
              {BUSINESS_NAME}.
              All rights reserved.
            </span>

            <span>
              Built for better
              business enquiries.
            </span>

          </div>

        </div>

      </footer>

      {/* ======================================================
          PRODUCT MODAL
          ====================================================== */}

      {productModal &&
        selectedProduct && (
          <div
            className="modalOverlay"
            onClick={() =>
              setProductModal(
                false
              )
            }
          >

            <div
              className="modalCard"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="modalClose"
                onClick={() =>
                  setProductModal(
                    false
                  )
                }
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="modalProductIcon">
                {
                  selectedProduct.icon
                }
              </div>

              <div className="eyebrow">
                {
                  selectedProduct.category
                }
              </div>

              <h2>
                {
                  selectedProduct.title
                }
              </h2>

              <p>
                {
                  selectedProduct.desc
                }
              </p>

              <div className="modalInfoGrid">

                <div>
                  <span>
                    Availability
                  </span>

                  <strong>
                    {
                      selectedProduct.availability
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    Unit
                  </span>

                  <strong>
                    {
                      selectedProduct.unit
                    }
                  </strong>
                </div>

              </div>

              <div className="modalBrands">

                {selectedProduct.brands.map(
                  (brand) => (
                    <span
                      key={brand}
                    >
                      {brand}
                    </span>
                  )
                )}

              </div>

              <div className="modalActions">

                <button
                  className="modalWhatsApp"
                  onClick={() =>
                    openWhatsApp(
                      "",
                      selectedProduct,
                      "product_modal"
                    )
                  }
                >
                  💬 Get Best Price
                </button>

                <button
                  className="modalBulk"
                  onClick={() => {
                    addToBulk(
                      selectedProduct
                    );

                    setProductModal(
                      false
                    );

                    setBulkModal(
                      true
                    );
                  }}
                >
                  📦 Add to Bulk
                </button>

              </div>

            </div>
          </div>
        )}

      {/* ======================================================
          BULK MODAL
          ====================================================== */}

      {bulkModal && (
        <div
          className="modalOverlay"
          onClick={() =>
            setBulkModal(false)
          }
        >

          <div
            className="bulkModalCard"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modalClose"
              onClick={() =>
                setBulkModal(false)
              }
              aria-label="Close bulk quote"
            >
              ✕
            </button>

            <div className="eyebrow">
              BULK MATERIAL
            </div>

            <h2>
              📦 Request Bulk Quote
            </h2>

            <p>
              Add materials and
              quantities.
            </p>

            {bulkItems.length ===
            0 ? (
              <div className="emptyBulk">

                <span>
                  📦
                </span>

                <h3>
                  No materials added
                </h3>

                <p>
                  Go to Products and
                  click + Add.
                </p>

                <button
                  className="primaryButton"
                  onClick={() => {
                    setBulkModal(
                      false
                    );

                    scrollTo(
                      "products"
                    );
                  }}
                >
                  Browse Products
                </button>

              </div>
            ) : (
              <>
                <div className="bulkList">

                  {bulkItems.map(
                    (item) => (
                      <div
                        className="bulkRow"
                        key={item.id}
                      >

                        <div className="bulkProduct">

                          <span>
                            {
                              item.icon
                            }
                          </span>

                          <div>
                            <strong>
                              {
                                item.title
                              }
                            </strong>

                            <small>
                              {
                                item.unit
                              }
                            </small>
                          </div>

                        </div>

                        <div className="quantityControl">

                          <input
                            type="number"
                            min="1"
                            value={
                              item.quantity
                            }
                            onChange={(e) =>
                              updateBulkQty(
                                item.id,
                                e.target
                                  .value
                              )
                            }
                          />

                          <span>
                            {
                              item.unit
                            }
                          </span>

                        </div>

                        <button
                          className="removeButton"
                          onClick={() =>
                            removeFromBulk(
                              item.id
                            )
                          }
                          aria-label={`Remove ${item.title}`}
                        >
                          ✕
                        </button>

                      </div>
                    )
                  )}

                </div>

                <div className="bulkForm">

                  <label>
                    Name
                    <input
                      value={
                        quote.name
                      }
                      onChange={(e) =>
                        setQuote({
                          ...quote,
                          name:
                            e.target
                              .value,
                        })
                      }
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      value={
                        quote.phone
                      }
                      onChange={(e) =>
                        setQuote({
                          ...quote,
                          phone:
                            e.target
                              .value,
                        })
                      }
                      placeholder="Phone number"
                    />
                  </label>

                  <label>
                    Delivery Location
                    <input
                      value={
                        quote.location
                      }
                      onChange={(e) =>
                        setQuote({
                          ...quote,
                          location:
                            e.target
                              .value,
                        })
                      }
                      placeholder="Project / delivery location"
                    />
                  </label>

                </div>

                <div className="bulkBottom">

                  <button
                    className="clearBulkButton"
                    onClick={() =>
                      setBulkItems(
                        []
                      )
                    }
                  >
                    Clear All
                  </button>

                  <button
                    className="submitQuoteButton"
                    onClick={
                      submitBulkQuote
                    }
                  >
                    💬 Send Bulk Quote
                  </button>

                </div>

              </>
            )}

          </div>

        </div>
      )}

      {/* ======================================================
          GALLERY LIGHTBOX
          ====================================================== */}

      {galleryImage && (
        <div
          className="modalOverlay"
          onClick={() =>
            setGalleryImage(
              null
            )
          }
        >

          <div
            className="galleryLightbox"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modalClose"
              onClick={() =>
                setGalleryImage(
                  null
                )
              }
            >
              ✕
            </button>

            <img
              src={
                galleryImage.src
              }
              alt={
                galleryImage.alt
              }
              onError={(e) => {
                e.currentTarget.style.display =
                  "none";
                e.currentTarget.nextElementSibling.style.display =
                  "flex";
              }}
            />

            <div className="lightboxFallback">
              {
                galleryImage.emoji
              }
            </div>

            <h3>
              {
                galleryImage.title
              }
            </h3>

          </div>

        </div>
      )}

      {/* ======================================================
          FLOATING WHATSAPP
          ====================================================== */}

      <button
        className="floatingWhatsApp"
        onClick={() =>
          openWhatsApp(
            "",
            null,
            "floating_button"
          )
        }
        aria-label="Chat on WhatsApp"
      >

        <span className="waIcon">
          ☎
        </span>

        <span className="waText">

          <small>
            Need Materials?
          </small>

          Chat on WhatsApp

        </span>

      </button>

      {/* ======================================================
          FLOATING QUOTE
          ====================================================== */}

      <a
        href="#quote"
        className="floatingQuote"
        aria-label="Get a quotation"
        onClick={() =>
          trackEvent(
            "floating_quote_click"
          )
        }
      >
        ✦
        <span>
          Quote
        </span>
      </a>

      {/* ======================================================
          MOBILE STICKY BAR
          ====================================================== */}

      <div className="mobileStickyBar">

        <button
          onClick={makeCall}
          aria-label="Call"
        >
          📞
          <span>
            Call
          </span>
        </button>

        <button
          onClick={() =>
            openWhatsApp(
              "",
              null,
              "mobile_sticky"
            )
          }
          aria-label="WhatsApp"
        >
          💬
          <span>
            WhatsApp
          </span>
        </button>

        <a
          href="#quote"
          onClick={() =>
            trackEvent(
              "mobile_quote_click"
            )
          }
        >
          🧾
          <span>
            Quote
          </span>
        </a>

        <button
          onClick={
            getDirections
          }
          aria-label="Directions"
        >
          📍
          <span>
            Map
          </span>
        </button>

      </div>

      {/* ======================================================
          SCROLL TOP
          ====================================================== */}

      {showTop && (
        <button
          className="scrollTopButton"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}

/* ============================================================
   RENDER
   ============================================================ */

createRoot(
  document.getElementById("root")
).render(
  <App />
);