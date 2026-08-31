import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* ============================================================
   SHREE MANGAL MURTI TRADERS
   ADVANCED PRODUCTION-READY BUSINESS WEBSITE
   ============================================================ */

/* ============================================================
   BUSINESS CONFIG
   ============================================================ */

const BUSINESS = {
  name: "Shree Mangal Murti Traders",
  hindiName: "श्री मंगल मूर्ती ट्रेडर्स",

  phone: "+919699214019",
  whatsapp: "919699214019",

  email: "info@shreemangalmurti.com",

  address:
    "Bhosari Nigdi Telco Road, MIDC Gawalimatha Chowk, Anukul Chowk, Pune - 411026",

  city: "Pune",
  state: "Maharashtra",
  postalCode: "411026",
  country: "IN",

  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=",

  social: {
    whatsapp: "https://wa.me/919699214019",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
};

/* ============================================================
   PRODUCTS
   ============================================================ */

const products = [
  {
    id: 1,
    icon: "🧱",
    title: "Cement",
    desc:
      "Quality cement for foundations, RCC work, masonry and general construction.",
    category: "Cement",
    availability: "In Stock",
    brands: ["UltraTech", "ACC", "Ambuja"],
    unit: "Bag",
    keywords:
      "cement construction concrete foundation rcc masonry",
  },

  {
    id: 2,
    icon: "🔩",
    title: "TMT Steel",
    desc:
      "TMT bars and steel materials for reinforced concrete and structural requirements.",
    category: "Steel",
    availability: "In Stock",
    brands: ["Tata Tiscon", "JSW", "Jindal"],
    unit: "Ton",
    keywords:
      "steel tmt rod sariya bars reinforcement construction",
  },

  {
    id: 3,
    icon: "🪵",
    title: "Plywood",
    desc:
      "Plywood, boards and related materials for interior and construction work.",
    category: "Hardware",
    availability: "In Stock",
    brands: ["CenturyPly", "Greenply", "Archidply"],
    unit: "Sheet",
    keywords:
      "plywood board wood interior furniture",
  },

  {
    id: 4,
    icon: "🚿",
    title: "Sanitaryware",
    desc:
      "Bathroom sanitaryware, fittings and plumbing-related products.",
    category: "Sanitary",
    availability: "In Stock",
    brands: ["Jaquar", "Hindware", "Kohler"],
    unit: "Piece",
    keywords:
      "bathroom sanitary toilet basin wash basin fittings",
  },

  {
    id: 5,
    icon: "⚡",
    title: "Electrical",
    desc:
      "Electrical accessories, wires, switches and lighting-related materials.",
    category: "Electrical",
    availability: "Limited Stock",
    brands: ["Anchor", "Havells", "Polycab"],
    unit: "Piece",
    keywords:
      "electrical wire switch socket lighting cable",
  },

  {
    id: 6,
    icon: "🏗️",
    title: "Construction Aggregates",
    desc:
      "Sand, aggregate, bricks and other essential construction materials.",
    category: "Aggregates",
    availability: "In Stock",
    brands: ["Local Suppliers", "Quarry Materials"],
    unit: "Ton",
    keywords:
      "sand aggregate bricks stone construction",
  },

  {
    id: 7,
    icon: "🎨",
    title: "Paint & Finishing",
    desc:
      "Paints, primers and finishing materials for residential and commercial projects.",
    category: "Paint",
    availability: "In Stock",
    brands: ["Asian Paints", "Berger", "Nerolac"],
    unit: "Litre",
    keywords:
      "paint primer wall colour finishing coating",
  },

  {
    id: 8,
    icon: "💧",
    title: "Plumbing Pipes",
    desc:
      "CPVC, PVC and GI pipes with plumbing fittings.",
    category: "Plumbing",
    availability: "In Stock",
    brands: ["Astral", "Finolex", "Supreme"],
    unit: "Piece",
    keywords:
      "pipe pvc cpvc plumbing fittings water",
  },

  {
    id: 9,
    icon: "🪟",
    title: "Glass & Hardware",
    desc:
      "Glass, aluminium sections and door/window hardware.",
    category: "Hardware",
    availability: "Contact for Availability",
    brands: ["Saint-Gobain", "Alco", "Jindal"],
    unit: "Piece",
    keywords:
      "glass aluminium door window hardware",
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
    a:
      "We supply cement, TMT steel, plywood, sanitaryware, electrical materials, aggregates, paints, plumbing pipes and hardware.",
  },

  {
    q: "Do you provide bulk material quotations?",
    a:
      "Yes. You can add multiple products to the Bulk Quote Builder and send the requirement through WhatsApp.",
  },

  {
    q: "Do you provide delivery?",
    a:
      "Delivery availability depends on material, quantity and project location. Contact us for confirmation.",
  },

  {
    q: "How can I request the best price?",
    a:
      "Share the material, quantity and delivery location through the quotation form or WhatsApp.",
  },

  {
    q: "Can I enquire about multiple products?",
    a:
      "Yes. Add multiple products to the Bulk Quote Builder and submit one combined enquiry.",
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
    whatsapp: "व्हॉट्सॲपवर बोला",
    call: "कॉल करा",
    directions: "मार्ग मिळवा",
  },
};

/* ============================================================
   GALLERY
   ============================================================ */

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
   SAFE STORAGE
   ============================================================ */

function storageGet(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return value;
  } catch {
    return fallback;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage may be unavailable.
  }
}

function storageGetJSON(key, fallback = []) {
  try {
    const value = localStorage.getItem(key);

    if (!value) {
      return fallback;
    }

    const parsed = JSON.parse(value);

    return parsed;
  } catch {
    return fallback;
  }
}

/* ============================================================
   TRACKING
   ============================================================ */

function getTrackingData() {
  const params = new URLSearchParams(
    window.location.search
  );

  const existing = storageGetJSON(
    "smm_tracking",
    {}
  );

  const data = {
    ...existing,

    utm_source:
      params.get("utm_source") ||
      existing.utm_source ||
      "",

    utm_medium:
      params.get("utm_medium") ||
      existing.utm_medium ||
      "",

    utm_campaign:
      params.get("utm_campaign") ||
      existing.utm_campaign ||
      "",

    utm_term:
      params.get("utm_term") ||
      existing.utm_term ||
      "",

    utm_content:
      params.get("utm_content") ||
      existing.utm_content ||
      "",

    referral:
      params.get("ref") ||
      params.get("referral") ||
      existing.referral ||
      "",

    landingPage:
      existing.landingPage ||
      window.location.pathname,

    firstSeen:
      existing.firstSeen ||
      new Date().toISOString(),
  };

  return data;
}

function saveTrackingData() {
  const data = getTrackingData();

  storageSet(
    "smm_tracking",
    JSON.stringify(data)
  );

  return data;
}

function trackEvent(eventName, details = {}) {
  const events = storageGetJSON(
    "smm_events",
    []
  );

  events.push({
    event: eventName,
    details,
    tracking: getTrackingData(),
    timestamp: new Date().toISOString(),
  });

  storageSet(
    "smm_events",
    JSON.stringify(events.slice(-200))
  );
}

/* ============================================================
   SEO
   ============================================================ */

function setMeta(name, content, property = false) {
  const attribute = property
    ? "property"
    : "name";

  let element =
    document.head.querySelector(
      `meta[${attribute}="${name}"]`
    );

  if (!element) {
    element =
      document.createElement("meta");

    element.setAttribute(
      attribute,
      name
    );

    document.head.appendChild(element);
  }

  element.setAttribute(
    "content",
    content
  );
}

function setupSEO() {
  const title =
    "Shree Mangal Murti Traders | Building Materials Supplier in Pune";

  const description =
    "Shree Mangal Murti Traders supplies building and construction materials including cement, TMT steel, plywood, sanitaryware, electrical, plumbing, paints and hardware in Pune and surrounding areas.";

  document.title = title;

  setMeta(
    "description",
    description
  );

  setMeta(
    "robots",
    "index, follow"
  );

  setMeta(
    "theme-color",
    "#f97316"
  );

  setMeta(
    "og:title",
    title,
    true
  );

  setMeta(
    "og:description",
    description,
    true
  );

  setMeta(
    "og:type",
    "website",
    true
  );

  setMeta(
    "og:url",
    window.location.href,
    true
  );

  setMeta(
    "twitter:card",
    "summary_large_image"
  );

  setMeta(
    "twitter:title",
    title
  );

  setMeta(
    "twitter:description",
    description
  );

  let canonical =
    document.head.querySelector(
      'link[rel="canonical"]'
    );

  if (!canonical) {
    canonical =
      document.createElement("link");

    canonical.rel = "canonical";

    document.head.appendChild(
      canonical
    );
  }

  canonical.href =
    window.location.origin + "/";
}

/* ============================================================
   STRUCTURED DATA
   ============================================================ */

function setupStructuredData() {
  const old =
    document.getElementById(
      "business-structured-data"
    );

  if (old) {
    old.remove();
  }

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: BUSINESS.name,

    description:
      "Building material supplier serving Pune and surrounding areas.",

    url: window.location.origin,

    telephone: BUSINESS.phone,

    email: BUSINESS.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },

    areaServed: deliveryAreas,

    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.instagram,
      BUSINESS.social.linkedin,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map(
      (faq) => ({
        "@type": "Question",

        name: faq.q,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })
    ),
  };

  const script =
    document.createElement(
      "script"
    );

  script.id =
    "business-structured-data";

  script.type =
    "application/ld+json";

  script.textContent =
    JSON.stringify([
      businessSchema,
      faqSchema,
    ]);

  document.head.appendChild(
    script
  );
}

/* ============================================================
   HELPERS
   ============================================================ */

function getMapsURL() {
  return (
    BUSINESS.mapsSearch +
    encodeURIComponent(
      BUSINESS.address
    )
  );
}

function isValidIndianPhone(phone) {
  const cleaned =
    phone.replace(/\D/g, "");

  return (
    /^[6-9]\d{9}$/.test(
      cleaned
    ) ||
    /^91[6-9]\d{9}$/.test(
      cleaned
    )
  );
}

function cleanPhone(phone) {
  const digits =
    phone.replace(/\D/g, "");

  if (
    digits.startsWith("91") &&
    digits.length === 12
  ) {
    return digits.slice(2);
  }

  return digits;
}

function createWhatsAppURL(message) {
  return (
    `https://wa.me/${BUSINESS.whatsapp}` +
    `?text=${encodeURIComponent(
      message
    )}`
  );
}

/* ============================================================
   APP
   ============================================================ */

function App() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(
      storageGet(
        "smm_dark",
        "false"
      ) === "true"
    );

  const [language, setLanguage] =
    useState(
      storageGet(
        "smm_language",
        "en"
      )
    );

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const [
    selectedProduct,
    setSelectedProduct,
  ] = useState(null);

  const [
    productModal,
    setProductModal,
  ] = useState(false);

  const [
    galleryImage,
    setGalleryImage,
  ] = useState(null);

  const [
    bulkItems,
    setBulkItems,
  ] = useState(() =>
    storageGetJSON(
      "smm_bulk",
      []
    )
  );

  const [
    bulkModal,
    setBulkModal,
  ] = useState(false);

  const [
    activeFAQ,
    setActiveFAQ,
  ] = useState(null);

  const [
    showTop,
    setShowTop,
  ] = useState(false);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    copied,
    setCopied,
  ] = useState("");

  const [
    toast,
    setToast,
  ] = useState("");

  const [
    sent,
    setSent,
  ] = useState(false);

  const [
    is404,
    setIs404,
  ] = useState(false);

  const [
    counters,
    setCounters,
  ] = useState({
    products: 0,
    categories: 0,
    areas: 0,
  });

  const [
    quote,
    setQuote,
  ] = useState({
    name: "",
    phone: "",
    email: "",
    material: "",
    quantity: "",
    location: "",
    message: "",
  });

  const lang =
    translations[language] ||
    translations.en;

  /* ============================================================
     INITIALIZATION
     ============================================================ */

  useEffect(() => {
    saveTrackingData();

    setupSEO();

    setupStructuredData();

    const timer =
      setTimeout(() => {
        setLoading(false);
      }, 700);

    return () =>
      clearTimeout(timer);
  }, []);

  /* ============================================================
     404
     ============================================================ */

  useEffect(() => {
    const validPaths = [
      "/",
      "",
    ];

    const currentPath =
      window.location.pathname;

    if (
      !validPaths.includes(
        currentPath
      )
    ) {
      setIs404(true);
    }
  }, []);

  /* ============================================================
     DARK MODE
     ============================================================ */

  useEffect(() => {
    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );

    storageSet(
      "smm_dark",
      String(darkMode)
    );
  }, [darkMode]);

  /* ============================================================
     LANGUAGE
     ============================================================ */

  useEffect(() => {
    storageSet(
      "smm_language",
      language
    );

    document.documentElement.lang =
      language;
  }, [language]);

  /* ============================================================
     BULK STORAGE
     ============================================================ */

  useEffect(() => {
    storageSet(
      "smm_bulk",
      JSON.stringify(
        bulkItems
      )
    );
  }, [bulkItems]);

  /* ============================================================
     TOAST AUTO CLOSE
     ============================================================ */

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer =
      setTimeout(() => {
        setToast("");
      }, 2500);

    return () =>
      clearTimeout(timer);
  }, [toast]);

  /* ============================================================
     SCROLL
     ============================================================ */

  useEffect(() => {
    const handleScroll =
      () => {
        setShowTop(
          window.scrollY > 500
        );
      };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
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
    if (loading) {
      return;
    }

    const targets = {
      products: products.length,
      categories: new Set(
        products.map(
          (item) =>
            item.category
        )
      ).size,
      areas:
        deliveryAreas.length,
    };

    const duration = 1200;

    const start =
      performance.now();

    const animate = (
      currentTime
    ) => {
      const progress =
        Math.min(
          (currentTime - start) /
            duration,
          1
        );

      const ease =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      setCounters({
        products: Math.floor(
          targets.products *
            ease
        ),

        categories:
          Math.floor(
            targets.categories *
              ease
          ),

        areas: Math.floor(
          targets.areas *
            ease
        ),
      });

      if (progress < 1) {
        requestAnimationFrame(
          animate
        );
      }
    };

    requestAnimationFrame(
      animate
    );
  }, [loading]);

  /* ============================================================
     CATEGORIES
     ============================================================ */

  const categories = useMemo(
    () => [
      "All",
      ...new Set(
        products.map(
          (product) =>
            product.category
        )
      ),
    ],
    []
  );

  /* ============================================================
     FILTER PRODUCTS
     ============================================================ */

  const filteredProducts =
    useMemo(() => {
      const search =
        searchTerm
          .trim()
          .toLowerCase();

      return products.filter(
        (product) => {
          const searchableText = [
            product.title,
            product.desc,
            product.category,
            product.keywords,
            ...product.brands,
          ]
            .join(" ")
            .toLowerCase();

          const matchesSearch =
            !search ||
            searchableText.includes(
              search
            );

          const matchesCategory =
            selectedCategory ===
              "All" ||
            product.category ===
              selectedCategory;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      searchTerm,
      selectedCategory,
    ]);

  /* ============================================================
     COMMON ACTIONS
     ============================================================ */

  const closeMenu = () =>
    setMenuOpen(false);

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

  const showToast = (
    message
  ) => {
    setToast(message);
  };

  /* ============================================================
     WHATSAPP
     ============================================================ */

  const openWhatsApp = (
    customMessage = "",
    product = null,
    source = "general"
  ) => {
    let message =
      customMessage;

    if (!message) {
      message =
        `Hello ${BUSINESS.name},

I am interested in your building materials.

Please share your best price and availability.`;
    }

    if (product) {
      message =
        `Hello ${BUSINESS.name},

I am interested in:

Product: ${product.title}
Category: ${product.category}
Unit: ${product.unit}

Brands:
${product.brands.join(", ")}

Please share your best price and availability.`;
    }

    const tracking =
      getTrackingData();

    message += `

---
Website Source:
${
  tracking.utm_source ||
  "Direct"
}

Campaign:
${
  tracking.utm_campaign ||
  "Direct"
}

Referral:
${
  tracking.referral ||
  "None"
}`;

    trackEvent(
      product
        ? "product_whatsapp_click"
        : "whatsapp_click",
      {
        source,
        product:
          product?.title ||
          null,
      }
    );

    window.open(
      createWhatsAppURL(
        message
      ),
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ============================================================
     CALL
     ============================================================ */

  const makeCall = () => {
    trackEvent(
      "phone_click"
    );

    window.location.href =
      `tel:${BUSINESS.phone}`;
  };

  /* ============================================================
     DIRECTIONS
     ============================================================ */

  const getDirections = () => {
    trackEvent(
      "directions_click"
    );

    window.open(
      getMapsURL(),
      "_blank",
      "noopener,noreferrer"
    );
  };

  /* ============================================================
     COPY
     ============================================================ */

  const copyText = async (
    value,
    type
  ) => {
    try {
      await navigator.clipboard.writeText(
        value
      );

      setCopied(type);

      trackEvent(
        "copy_click",
        { type }
      );

      showToast(
        type === "phone"
          ? "Phone number copied"
          : "Email copied"
      );

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
     ADD TO BULK
     ============================================================ */

  const addToBulk = (
    product
  ) => {
    setBulkItems(
      (previous) => {
        const existing =
          previous.find(
            (item) =>
              item.id ===
              product.id
          );

        if (existing) {
          showToast(
            `${product.title} quantity increased`
          );

          return previous.map(
            (item) =>
              item.id ===
              product.id
                ? {
                    ...item,
                    quantity:
                      Number(
                        item.quantity ||
                          0
                      ) + 1,
                  }
                : item
          );
        }

        showToast(
          `${product.title} added to bulk quote`
        );

        return [
          ...previous,
          {
            ...product,
            quantity: 1,
          },
        ];
      }
    );

    trackEvent(
      "add_bulk_product",
      {
        product:
          product.title,
      }
    );
  };

  /* ============================================================
     REMOVE BULK
     ============================================================ */

  const removeFromBulk = (
    id
  ) => {
    setBulkItems(
      (items) =>
        items.filter(
          (item) =>
            item.id !== id
        )
    );

    showToast(
      "Product removed"
    );
  };

  /* ============================================================
     UPDATE BULK QUANTITY
     ============================================================ */

  const updateBulkQty = (
    id,
    value
  ) => {
    const numericValue =
      Number(value);

    const quantity =
      Number.isFinite(
        numericValue
      ) &&
      numericValue > 0
        ? numericValue
        : 1;

    setBulkItems(
      (items) =>
        items.map(
          (item) =>
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
     CLEAR BULK
     ============================================================ */

  const clearBulk = () => {
    setBulkItems([]);

    showToast(
      "Bulk quote cleared"
    );
  };

  /* ============================================================
     PRODUCT DETAILS
     ============================================================ */

  const openProduct = (
    product
  ) => {
    setSelectedProduct(
      product
    );

    setProductModal(true);

    trackEvent(
      "product_view",
      {
        product:
          product.title,
      }
    );
  };

  /* ============================================================
     PRODUCT → QUOTE
     ============================================================ */

  const enquireProduct = (
    product
  ) => {
    setQuote(
      (previous) => ({
        ...previous,
        material:
          product.title,
      })
    );

    setProductModal(
      false
    );

    scrollTo("quote");

    trackEvent(
      "product_quote_click",
      {
        product:
          product.title,
      }
    );
  };

  /* ============================================================
     AVAILABILITY CLASS
     ============================================================ */

  const getAvailabilityClass =
    (status) => {
      if (
        status === "In Stock"
      ) {
        return "stockGood";
      }

      if (
        status ===
        "Limited Stock"
      ) {
        return "stockLimited";
      }

      return "stockContact";
    };

  /* ============================================================
     BULK QUOTE SUBMIT
     ============================================================ */

  const submitBulkQuote =
    () => {
      if (!bulkItems.length) {
        showToast(
          "Please add at least one material"
        );

        return;
      }

      if (
        quote.phone &&
        !isValidIndianPhone(
          quote.phone
        )
      ) {
        showToast(
          "Please enter a valid Indian mobile number"
        );

        return;
      }

      let message =
        `Hello ${BUSINESS.name},

📦 BULK MATERIAL QUOTE REQUEST

`;

      bulkItems.forEach(
        (item, index) => {
          message +=
            `${index + 1}. ${
              item.title
            } - ${
              item.quantity
            } ${
              item.unit
            }\n`;
        }
      );

      message += `

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

📍 Delivery Location:
${
  quote.location ||
  "Please confirm location"
}

Please share your best bulk price and availability.`;

      trackEvent(
        "bulk_quote_whatsapp",
        {
          items:
            bulkItems.map(
              (item) =>
                item.title
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

      showToast(
        "Bulk enquiry prepared"
      );
    };

  /* ============================================================
     NORMAL QUOTE SUBMIT
     ============================================================ */

  const submitQuote = (
    event
  ) => {
    event.preventDefault();

    const name =
      quote.name.trim();

    const phone =
      quote.phone.trim();

    if (!name) {
      showToast(
        "Please enter your name"
      );

      return;
    }

    if (
      !isValidIndianPhone(
        phone
      )
    ) {
      showToast(
        "Please enter a valid 10-digit Indian mobile number"
      );

      return;
    }

    const cleanMobile =
      cleanPhone(phone);

    if (
      quote.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        quote.email
      )
    ) {
      showToast(
        "Please enter a valid email address"
      );

      return;
    }

    const tracking =
      getTrackingData();

    const message =
      `Hello ${BUSINESS.name},

🧾 NEW QUOTATION REQUEST

👤 Name:
${name}

📞 Phone:
${cleanMobile}

📧 Email:
${
  quote.email ||
  "Not provided"
}

📦 Material:
${
  quote.material ||
  "Not specified"
}

📊 Quantity:
${
  quote.quantity ||
  "Not specified"
}

📍 Project Location:
${
  quote.location ||
  "Not specified"
}

📝 Requirement:
${
  quote.message ||
  "Please contact me."
}

---
UTM Source:
${
  tracking.utm_source ||
  "Direct"
}

UTM Medium:
${
  tracking.utm_medium ||
  "Direct"
}

Campaign:
${
  tracking.utm_campaign ||
  "Direct"
}

Referral:
${
  tracking.referral ||
  "None"
}`;

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

    showToast(
      "WhatsApp enquiry prepared"
    );

    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  /* ============================================================
     LOADING
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
            Building better
            connections...
          </p>
        </div>
      </div>
    );
  }

  /* ============================================================
     404
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
            The page you are
            looking for doesn't
            exist.
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
          TOAST
          ====================================================== */}

      {toast && (
        <div
          className="toast"
          role="status"
        >
          ✓ {toast}
        </div>
      )}

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
                  (value) =>
                    !value
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
            aria-label={
              BUSINESS.name
            }
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
                (value) =>
                  !value
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
              onClick={
                closeMenu
              }
            >
              {lang.home}
            </a>

            <a
              href="#about"
              onClick={
                closeMenu
              }
            >
              {lang.about}
            </a>

            <a
              href="#products"
              onClick={
                closeMenu
              }
            >
              {lang.products}
            </a>

            <a
              href="#brands"
              onClick={
                closeMenu
              }
            >
              {lang.brands}
            </a>

            <a
              href="#gallery"
              onClick={
                closeMenu
              }
            >
              {lang.gallery}
            </a>

            <a
              href="#reviews"
              onClick={
                closeMenu
              }
            >
              {lang.reviews}
            </a>

            <a
              href="#faq"
              onClick={
                closeMenu
              }
            >
              {lang.faq}
            </a>

            <a
              href="#contact"
              onClick={
                closeMenu
              }
            >
              {lang.contact}
            </a>

            <a
              href="#quote"
              className="navQuote"
              onClick={
                closeMenu
              }
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
                BUILDING MATERIAL
                SUPPLIER
              </div>

              <p className="heroHindi">
                {BUSINESS.hindiName}
              </p>

              <h1>
                Everything You Need
                To{" "}
                <span>
                  Build Better.
                </span>
              </h1>

              <p className="heroLead">
                Building and
                construction materials
                for residential,
                commercial and project
                requirements in Pune.
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
                  <strong>✓</strong>
                  Product Enquiry
                </div>

                <div>
                  <strong>✓</strong>
                  Bulk Orders
                </div>

                <div>
                  <strong>✓</strong>
                  Local Delivery
                </div>

              </div>

              <div className="counterGrid">

                <div>
                  <strong>
                    {counters.products}+
                  </strong>

                  <span>
                    Products
                  </span>
                </div>

                <div>
                  <strong>
                    {counters.categories}+
                  </strong>

                  <span>
                    Categories
                  </span>
                </div>

                <div>
                  <strong>
                    {counters.areas}+
                  </strong>

                  <span>
                    Service Areas
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
                      For your project
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
            TRUST
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
                  Product options for
                  different project
                  requirements.
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
                  Request pricing based
                  on quantity and
                  requirement.
                </p>
              </div>
            </div>

            <div className="trustCard">
              <span>⚡</span>

              <div>
                <strong>
                  Quick Enquiry
                </strong>

                <p>
                  Send your requirement
                  directly through
                  WhatsApp.
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
                  Delivery availability
                  based on location and
                  order.
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
                  {BUSINESS.name}
                </strong>{" "}
                supplies essential
                building and
                construction materials
                for residential,
                commercial and project
                requirements.
              </p>

              <p>
                Customers can search
                products, compare
                categories, prepare
                bulk enquiries and
                contact the business
                directly through
                WhatsApp or phone.
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
                categories and create a
                bulk quotation.
              </p>

            </div>

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
                        key={
                          category
                        }
                        value={
                          category
                        }
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
                  {
                    bulkItems.length
                  }
                </b>
              </button>

            </div>

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

                <button
                  className="primaryButton"
                  onClick={() => {
                    setSearchTerm(
                      ""
                    );

                    setSelectedCategory(
                      "All"
                    );
                  }}
                >
                  Clear Filters
                </button>

              </div>
            ) : (

              <div className="productGrid">

                {filteredProducts.map(
                  (
                    product,
                    index
                  ) => (

                    <article
                      className="productCard"
                      key={
                        product.id
                      }
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
                          (
                            brand
                          ) => (
                            <span
                              key={
                                brand
                              }
                            >
                              {
                                brand
                              }
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
                            onClick={() =>
                              openProduct(
                                product
                              )
                            }
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
            BEST PRICE CTA
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
                    `Hello ${BUSINESS.name},

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
                Add your actual business
                photos to the gallery
                folder.
              </p>

            </div>

            <div className="galleryGrid">

              {galleryImages.map(
                (image) => (

                  <button
                    className="galleryCard"
                    key={
                      image.id
                    }
                    onClick={() =>
                      setGalleryImage(
                        image
                      )
                    }
                    aria-label={`Open ${image.title}`}
                  >

                    <img
                      src={
                        image.src
                      }
                      alt={
                        image.alt
                      }
                      loading="lazy"
                      onError={(
                        event
                      ) => {
                        event.currentTarget.style.display =
                          "none";

                        const fallback =
                          event
                            .currentTarget
                            .parentElement
                            ?.querySelector(
                              ".galleryFallback"
                            );

                        if (fallback) {
                          fallback.style.display =
                            "flex";
                        }
                      }}
                    />

                    <span
                      className="galleryFallback"
                      style={{
                        display:
                          "none",
                      }}
                    >
                      {
                        image.emoji
                      }
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
            DELIVERY
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
                onClick={
                  getDirections
                }
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
                <span>🏆</span>

                <h3>
                  Quality Focus
                </h3>

                <p>
                  Product choices from
                  known brands and
                  suppliers.
                </p>
              </div>

              <div className="whyCard">
                <span>₹</span>

                <h3>
                  Competitive Pricing
                </h3>

                <p>
                  Request pricing based
                  on your quantity and
                  requirement.
                </p>
              </div>

              <div className="whyCard">
                <span>⚡</span>

                <h3>
                  Quick Communication
                </h3>

                <p>
                  WhatsApp and phone
                  support for enquiries.
                </p>
              </div>

              <div className="whyCard">
                <span>📦</span>

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
            PROCESS
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
                  and delivery
                  requirement.
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
                href={getMapsURL()}
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
                Genuine customer reviews
                should be added here
                after collecting them
                from actual customers.
              </p>

            </div>

            <div className="reviewsGrid">

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  Your verified Google
                  review can be displayed
                  here.
                </p>

                <strong>
                  Customer Review
                </strong>

                <small>
                  Add genuine review
                </small>

              </article>

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  Replace this section
                  with genuine customer
                  feedback.
                </p>

                <strong>
                  Customer Review
                </strong>

                <small>
                  Add genuine review
                </small>

              </article>

              <article className="reviewCard">

                <div className="reviewStars">
                  ★★★★★
                </div>

                <p>
                  Only publish reviews
                  received from real
                  customers.
                </p>

                <strong>
                  Customer Review
                </strong>

                <small>
                  Add genuine review
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
                (
                  faq,
                  index
                ) => (

                  <div
                    className="faqItem"
                    key={
                      faq.q
                    }
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
                onClick={
                  makeCall
                }
              >
                📞 Call Now
              </button>

            </div>

          </div>

        </section>

        {/* ====================================================
            QUOTATION
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
                  ✓ WhatsApp communication
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
                    {
                      BUSINESS.address
                    }
                  </p>

                </div>

              </div>

            </div>

            <form
              className="quoteForm"
              onSubmit={
                submitQuote
              }
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
                        name:
                          e.target
                            .value,
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
                    inputMode="numeric"
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
                    placeholder="10-digit mobile number"
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
                          e.target
                            .value,
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
                          e.target
                            .value,
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
                          e.target
                            .value,
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
                          e.target
                            .value,
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
                        e.target
                          .value,
                    })
                  }
                  placeholder="Tell us about quantity, brand, delivery and project requirement..."
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
                <div
                  className="successMessage"
                  role="status"
                >
                  ✓ Enquiry prepared.
                  WhatsApp will open
                  with your quotation
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
                      BUSINESS.address
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
                    href={`tel:${BUSINESS.phone}`}
                  >
                    {
                      BUSINESS.phone
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
                    href={`mailto:${BUSINESS.email}`}
                  >
                    {
                      BUSINESS.email
                    }
                  </a>

                </div>

              </div>

            </div>

            <div className="contactTools">

              <button
                onClick={() =>
                  copyText(
                    BUSINESS.phone,
                    "phone"
                  )
                }
              >
                📋{" "}
                {copied ===
                "phone"
                  ? "Copied!"
                  : "Copy Phone"}
              </button>

              <button
                onClick={() =>
                  copyText(
                    BUSINESS.email,
                    "email"
                  )
                }
              >
                📋{" "}
                {copied ===
                "email"
                  ? "Copied!"
                  : "Copy Email"}
              </button>

              <button
                onClick={
                  makeCall
                }
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
                      BUSINESS.address
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
                BUSINESS.address
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
                getMapsURL()
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
              href={`tel:${BUSINESS.phone}`}
            >
              📞{" "}
              {
                BUSINESS.phone
              }
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
            >
              ✉️{" "}
              {
                BUSINESS.email
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
                  BUSINESS.social
                    .facebook
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href={
                  BUSINESS.social
                    .instagram
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href={
                  BUSINESS.social
                    .linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href={
                  BUSINESS.social
                    .whatsapp
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
              {
                BUSINESS.name
              }.
              All rights reserved.
            </span>

            <span>
              Building material
              enquiries made simple.
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

                <button
                  className="outlineButton"
                  onClick={() =>
                    enquireProduct(
                      selectedProduct
                    )
                  }
                >
                  🧾 Enquire
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
            setBulkModal(
              false
            )
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
                setBulkModal(
                  false
                )
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
                        key={
                          item.id
                        }
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
                            step="1"
                            value={
                              item.quantity
                            }
                            onChange={(
                              e
                            ) =>
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
                      inputMode="numeric"
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
                      placeholder="10-digit mobile number"
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
                    onClick={
                      clearBulk
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
              aria-label="Close image"
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
              onError={(
                event
              ) => {
                event.currentTarget.style.display =
                  "none";

                const fallback =
                  event.currentTarget.parentElement?.querySelector(
                    ".lightboxFallback"
                  );

                if (fallback) {
                  fallback.style.display =
                    "flex";
                }
              }}
            />

            <div
              className="lightboxFallback"
              style={{
                display: "none",
              }}
            >
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
          💬
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
          onClick={
            makeCall
          }
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
              behavior:
                "smooth",
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

const rootElement =
  document.getElementById(
    "root"
  );

if (!rootElement) {
  throw new Error(
    "Root element #root was not found."
  );
}

createRoot(
  rootElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);