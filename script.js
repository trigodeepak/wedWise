// WedWise Modular Interactive Logic (Reads from config.json)
(function() {
      /* ========================================================================
         CENTRALIZED JSON CONFIGURATION (Mirrored in standalone config.json)
         Edit experts, quizQuestions, reviews, faqs, courses, plans, or WhatsApp here!
         ======================================================================== */
      const WEDWISE_CONFIG = {
        whatsappNumber: "919876543210",
        supportEmail: "hello@wedwise.in",
        googleClientId: "", // Optional: Paste Google OAuth Client ID later to require Google Sign-In
        reportDeliveryMode: "whatsapp_or_email", // "whatsapp_or_email" | "google_login"
        i18n: {
          en: {
            tagline: "Prepare for forever.",
            navHome: "Home",
            navAssessments: "Assessments",
            navCourses: "Courses",
            navExpert: "Expert Advice",
            navFamilies: "For Families",
            btnInviteCode: "Partner Code",
            btnBookHeader: "Book 1:1 Session",
            heroBadge: "India-First Pre-Marital Consultation Platform",
            heroTagline: "Prepare for forever.",
            heroHeadline: "Build a Stronger Relationship, Together",
            heroSubtext: "A complete pre-marital consultation platform to help couples and families build a stronger, more harmonious future together. Guidance, insights and tools for a happy married life.",
            ctaStartJourney: "Start Your Journey",
            ctaWhatsappHero: "Book on WhatsApp",
            pillarsHeading: "Everything You Need Before Saying \"I Do\""
          },
          hi: {
            tagline: "हमेशा के साथ के लिए समझदारी से तैयारी।",
            navHome: "होम",
            navAssessments: "अनुकूलता जाँच",
            navCourses: "कोर्स",
            navExpert: "विशेषज्ञ परामर्श",
            navFamilies: "परिवारों के लिए",
            btnInviteCode: "पार्टनर कोड",
            btnBookHeader: "1:1 सेशन बुक करें",
            heroBadge: "भारत का प्रमुख प्री-मैरिटल परामर्श प्लेटफ़ॉर्म",
            heroTagline: "हमेशा के साथ के लिए तैयारी।",
            heroHeadline: "एक मजबूत और खुशहाल रिश्ते की नींव रखें",
            heroSubtext: "दंपतियों और परिवारों को आपसी समझ, संवाद और विश्वास के साथ विवाह की तैयारी करने में मदद करने वाला संपूर्ण प्लेटफ़ॉर्म।",
            ctaStartJourney: "अपनी यात्रा शुरू करें",
            ctaWhatsappHero: "WhatsApp पर बुक करें",
            pillarsHeading: "विवाह से पहले ज़रूरी हर मार्गदर्शन"
          }
        },
        whyWedwise: [
          {
            title: "Holistic Preparation",
            desc: "Mind, Heart and Future — structured emotional, financial, and practical readiness."
          },
          {
            title: "Personalized Insights",
            desc: "Know what matters — highlight areas of alignment and priorities to discuss together."
          },
          {
            title: "Expert Support",
            desc: "From counselling to courses — psychologists and pre-marital counselors on Google Meet."
          },
          {
            title: "Designed for Indian Families",
            desc: "With cultural sensitivity — balances modern couple autonomy with family warmth."
          }
        ],
        plans: [
          {
            name: "Free Starter",
            subtitle: "Introductory prompts & readiness check",
            price: "₹0",
            featured: false
          },
          {
            name: "Self-Paced Courses & Assessments",
            subtitle: "40–60 reviewed questions & bilingual modules",
            price: "₹499 – ₹1,499",
            featured: false
          },
          {
            name: "1:1 Premarital Strategy Session",
            subtitle: "60-Min Private Video Session (Google Meet)",
            price: "₹2,999",
            badge: "Popular",
            featured: true
          }
        ],
        prompts: [
          {
            category: "Category: Finances & Independence",
            en: "“What does financial independence mean to you after marriage, and how should we balance joint goals with personal spending?”",
            hi: "\"शादी के बाद आपके लिए आर्थिक स्वतंत्रता का क्या अर्थ है, और हम साझा लक्ष्यों व व्यक्तिगत खर्चों में संतुलन कैसे बनाएंगे?\"",
            topicKey: "Finances"
          },
          {
            category: "Category: Family Expectations & Boundaries",
            en: "“How do we envision celebrating festivals, visiting both sets of parents, and making household decisions respectfully?”",
            hi: "\"हम त्योहार मनाने, दोनों परिवारों के साथ समय बिताने और आपसी सम्मान के साथ घर के फैसले लेने को कैसे देखते हैं?\"",
            topicKey: "Family"
          },
          {
            category: "Category: Conflict Resolution & Emotional Support",
            en: "“When we disagree or feel overwhelmed, do you prefer talking things through immediately or taking quiet time first?”",
            hi: "\"जब हमारे बीच असहमति हो या तनाव हो, तो क्या आप तुरंत बात करना पसंद करते हैं या पहले थोड़ा शांत समय लेना?\"",
            topicKey: "Communication"
          },
          {
            category: "Category: Career & Relocation Decisions",
            en: "“If one of us receives a major career opportunity in another city, how will we evaluate that transition as a team?”",
            hi: "\"यदि हममें से किसी एक को दूसरे शहर में करियर का बड़ा अवसर मिलता है, तो हम एक टीम के रूप में उसका निर्णय कैसे लेंगे?\"",
            topicKey: "General"
          },
          {
            category: "Category: Personal Space & Daily Lifestyle",
            en: "“What daily routines, solo hobbies, or friendships are essential for your personal recharge after marriage?”",
            hi: "\"शादी के बाद आपकी मानसिक शांति और खुशी के लिए कौन सी दैनिक आदतें, शौक या मित्रताएं ज़रूरी हैं?\"",
            topicKey: "Intimacy & Lifestyle"
          },
          {
            category: "Category: Future Planning & Responsibilities",
            en: "“How should we divide everyday household responsibilities so neither partner feels silently overburdened?”",
            hi: "\"हमें रोज़मर्रा की घरेलू ज़िम्मेदारियों को कैसे बाँटना चाहिए ताकि किसी भी साथी पर अनकहा बोझ न पड़े?\"",
            topicKey: "General"
          }
        ],
        courses: [
          {
            id: "c1",
            type: "couple",
            badge: "Couple Track • EN / हिंदी",
            title: "Financial Harmony for Indian Couples",
            desc: "Joint vs. individual accounts, wedding budgets, investments, family support, and debt transparency.",
            lessons: "6 Lessons • 90 Mins",
            topic: "Finances"
          },
          {
            id: "c2",
            type: "couple",
            badge: "Couple Track • EN / हिंदी",
            title: "Healthy Communication & Conflict Repair",
            desc: "Active listening, non-defensive expression, emotional triggers, and building psychological safety.",
            lessons: "5 Lessons • 75 Mins",
            topic: "Communication"
          },
          {
            id: "c3",
            type: "family",
            badge: "Family Guidance • EN / हिंदी",
            title: "Bridging Two Families with Warmth & Boundaries",
            desc: "Navigating cultural traditions, living arrangements, mutual respect, and healthy couple autonomy.",
            lessons: "4 Lessons • 60 Mins",
            topic: "Family"
          }
        ],
        experts: [
          {
            name: "Dr. Ananya Sharma",
            meta: "9+ Yrs • Family Expectations & Communication (EN/HI)",
            topic: "Family"
          },
          {
            name: "Rohan Mehta, Counseling Psychologist",
            meta: "7+ Yrs • Couple Finances, Career & Conflict Resolution",
            topic: "Finances"
          },
          {
            name: "Dr. Meera Nair, Relationship Therapist",
            meta: "11+ Yrs • Emotional Intimacy, Values & Lifestyle Alignment",
            topic: "Intimacy & Lifestyle"
          }
        ],
        reviews: [
          {
            quote: "“We were nervous about discussing joint expenses and career relocations before our wedding. One 60-minute session gave us a respectful framework we still use every month.”",
            couple: "Aarav & Sneha",
            location: "Bengaluru • Engaged"
          },
          {
            quote: "“Since ours was an arranged match with a 6-month courtship, the WedWise conversation prompts helped us move past small talk into genuine emotional understanding.”",
            couple: "Kartik & Pooja",
            location: "Delhi NCR • Newly Married"
          },
          {
            quote: "“Joining on Google Meet from Mumbai and Pune was effortless. Our counselor understood Indian family nuances without ever taking sides.”",
            couple: "Rishi & Tanvi",
            location: "Mumbai / Pune"
          }
        ],
        faqs: [
          {
            q: "Can we join from two different cities?",
            a: "Yes! Your private Google Meet invite goes to both partners' emails so you can join from different cities or homes."
          },
          {
            q: "What if we need to reschedule our slot?",
            a: "Simply message us on WhatsApp at least 24 hours before your session, and we will move your calendar invite at no extra cost."
          },
          {
            q: "Are sessions available in English and Hindi?",
            a: "Yes, our counselors conduct sessions in English, Hindi, or a natural bilingual mix based on your comfort."
          },
          {
            q: "Is our conversation shared with parents or family?",
            a: "Never. Your session notes and compatibility reflections remain 100% confidential between you, your partner, and your counselor."
          }
        ],
        quizQuestions: [
          {
            category: "Finances & Transparency",
            topicKey: "Finances",
            q: "1. Have you and your partner openly shared your current income, savings style, and financial commitments?",
            options: ["Yes, in full detail", "Briefly mentioned, need deeper talk", "Not discussed yet"]
          },
          {
            category: "Family Expectations & Boundaries",
            topicKey: "Family",
            q: "2. Have you aligned on living arrangements (nuclear vs. joint family) and boundaries with extended family?",
            options: ["Completely aligned", "Somewhat discussed", "Still figuring out how to bring it up"]
          },
          {
            category: "Emotional Support & Conflict",
            topicKey: "Communication",
            q: "3. Do you know how your partner prefers to receive support during high-stress work or family days?",
            options: ["Yes, we understand each other well", "Sometimes we misread signals", "We want tools to communicate better"]
          },
          {
            category: "Career & Future Planning",
            topicKey: "General",
            q: "4. Have you discussed career timelines, relocation possibilities, and family planning expectations?",
            options: ["Yes, clear 3–5 year view", "Partially discussed", "Not yet"]
          },
          {
            category: "Relationship Preparation Style",
            topicKey: "General",
            q: "5. How would you prefer to prepare for your marriage over the next 4 weeks?",
            options: ["1:1 Confidential Video Session + Guided Prompts", "Self-paced assessments & conversation cards", "Family + Couple combined guidance"]
          }
        ]
      };

      /* ========================================================================
         STATE & DEFENSIVE DOM HELPERS
         ======================================================================== */
      let currentLang = 'en';
      let currentPage = 'home';
      let currentPromptIndex = 0;
      let currentCourseFilter = 'all';
      let lastQuizState = { pct: 80, priorityCategory: 'Family Expectations & Boundaries', priorityTopicKey: 'Family', summaryLines: [] };

      function byId(id) { return document.getElementById(id); }
      function on(id, event, handler) {
        const el = byId(id);
        if (el) el.addEventListener(event, handler);
      }
      function setText(id, text) {
        const el = byId(id);
        if (el) el.textContent = text;
      }

      function showToast(msg) {
        const toast = byId('toastBanner');
        if (!toast) return;
        setText('toastMessage', msg);
        toast.classList.remove('d-none');
        toast.classList.add('d-flex');
        clearTimeout(window._wedwiseToastTimer);
        window._wedwiseToastTimer = setTimeout(function() {
          toast.classList.add('d-none');
          toast.classList.remove('d-flex');
        }, 2800);
      }

      function copyText(str, label) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(str).then(function() {
            showToast(label || 'Copied to clipboard!');
          }).catch(function() { fallbackCopy(str, label); });
        } else {
          fallbackCopy(str, label);
        }
      }

      function fallbackCopy(str, label) {
        const ta = document.createElement('textarea');
        ta.value = str;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          showToast(label || 'Copied to clipboard!');
        } catch (err) {
          showToast('Copy ready');
        }
        document.body.removeChild(ta);
      }

      /* ========================================================================
         CONFIG-DRIVEN RENDERERS (Update config.json to update site content)
         ======================================================================== */
      function renderWhyAndPlans() {
        const whyBox = byId('whyPointsContainer');
        if (whyBox && WEDWISE_CONFIG.whyWedwise) {
          whyBox.innerHTML = WEDWISE_CONFIG.whyWedwise.map(function(item) {
            return (
              '<div class="col-12 col-sm-6">' +
                '<div class="ww-card p-4 h-100 d-flex align-items-start gap-3">' +
                  '<span class="badge rounded-circle bg-ww-purple p-2">✓</span>' +
                  '<div>' +
                    '<h3 class="h6 fw-bold mb-1">' + item.title + '</h3>' +
                    '<p class="small text-secondary mb-0">' + item.desc + '</p>' +
                  '</div>' +
                '</div>' +
              '</div>'
            );
          }).join('');
        }

        const plansBox = byId('plansContainer');
        if (plansBox && WEDWISE_CONFIG.plans) {
          plansBox.innerHTML = WEDWISE_CONFIG.plans.map(function(plan) {
            if (plan.featured) {
              return (
                '<div class="p-3 rounded-3 bg-ww-purple text-white d-flex align-items-center justify-content-between shadow-sm">' +
                  '<div>' +
                    '<div class="fw-bold small d-flex align-items-center gap-2">' +
                      '<span>' + plan.name + '</span>' +
                      (plan.badge ? '<span class="badge rounded-pill" style="background:#E6A04A;color:#343039;">' + plan.badge + '</span>' : '') +
                    '</div>' +
                    '<div class="small opacity-75">' + plan.subtitle + '</div>' +
                  '</div>' +
                  '<span class="fw-bold fs-5" style="color:#E6A04A;">' + plan.price + '</span>' +
                '</div>'
              );
            }
            return (
              '<div class="p-3 rounded-3 bg-ww-ivory border border-ww-gold d-flex align-items-center justify-content-between">' +
                '<div>' +
                  '<div class="fw-bold small">' + plan.name + '</div>' +
                  '<div class="text-secondary" style="font-size:0.78rem;">' + plan.subtitle + '</div>' +
                '</div>' +
                '<span class="fw-bold text-ww-purple">' + plan.price + '</span>' +
              '</div>'
            );
          }).join('');
        }
      }

      function renderReviewsAndFaqs() {
        const revBox = byId('reviewsGridContainer');
        if (revBox && WEDWISE_CONFIG.reviews) {
          revBox.innerHTML = WEDWISE_CONFIG.reviews.map(function(r) {
            return (
              '<div class="col-12 col-md-4">' +
                '<div class="ww-card p-4 h-100 d-flex flex-column justify-content-between">' +
                  '<p class="small fst-italic text-secondary mb-3">' + r.quote + '</p>' +
                  '<div class="pt-3 border-top border-ww-gold d-flex justify-content-between small">' +
                    '<strong class="text-ww-purple">' + r.couple + '</strong>' +
                    '<span class="text-secondary">' + r.location + '</span>' +
                  '</div>' +
                '</div>' +
              '</div>'
            );
          }).join('');
        }

        const faqBox = byId('faqsGridContainer');
        if (faqBox && WEDWISE_CONFIG.faqs) {
          faqBox.innerHTML = WEDWISE_CONFIG.faqs.map(function(f) {
            return (
              '<div class="col-12 col-md-6">' +
                '<div class="p-3 rounded-3 bg-ww-ivory border border-ww-gold h-100">' +
                  '<div class="fw-bold mb-1">' + f.q + '</div>' +
                  '<p class="text-secondary mb-0">' + f.a + '</p>' +
                '</div>' +
              '</div>'
            );
          }).join('');
        }
      }

      function renderPrompt() {
        const prompts = WEDWISE_CONFIG.prompts;
        const item = prompts[currentPromptIndex];
        if (!item) return;
        setText('promptCounter', 'Prompt ' + (currentPromptIndex + 1) + ' of ' + prompts.length);
        setText('promptCategoryBadge', item.category);
        setText('promptQuestionText', item.en);
        setText('promptQuestionHindi', item.hi);
      }

      function renderCourses() {
        const grid = byId('coursesGrid');
        if (!grid) return;
        const filtered = WEDWISE_CONFIG.courses.filter(function(c) {
          return currentCourseFilter === 'all' || c.type === currentCourseFilter;
        });
        grid.innerHTML = filtered.map(function(c) {
          return (
            '<div class="col-12 col-md-4">' +
              '<div class="ww-card p-4 h-100 d-flex flex-column justify-content-between">' +
                '<div>' +
                  '<span class="ww-badge mb-3">' + c.badge + '</span>' +
                  '<h3 class="font-serif-brand h5 fw-bold mb-2">' + c.title + '</h3>' +
                  '<p class="small text-secondary mb-3">' + c.desc + '</p>' +
                '</div>' +
                '<div class="pt-3 border-top border-ww-gold d-flex align-items-center justify-content-between">' +
                  '<span class="small fw-semibold text-ww-gold">' + c.lessons + '</span>' +
                  '<button type="button" data-course-topic="' + c.topic + '" class="course-book-btn btn btn-link p-0 text-ww-purple fw-semibold small text-decoration-none">Book 1:1 on This →</button>' +
                '</div>' +
              '</div>' +
            '</div>'
          );
        }).join('');

        grid.querySelectorAll('.course-book-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            switchPage('counseling', btn.getAttribute('data-course-topic'));
          });
        });
      }

      function renderExperts() {
        const container = byId('expertsListContainer');
        if (!container) return;
        container.innerHTML = WEDWISE_CONFIG.experts.map(function(ex) {
          return (
            '<div class="p-3 rounded-3 bg-ww-ivory border border-ww-gold d-flex align-items-center justify-content-between gap-2">' +
              '<div>' +
                '<div class="fw-bold small">' + ex.name + '</div>' +
                '<div class="text-secondary" style="font-size:0.75rem;">' + ex.meta + '</div>' +
              '</div>' +
              '<button type="button" data-select-topic="' + ex.topic + '" class="quick-topic-btn btn-ww-soft py-1 px-3 small">Book</button>' +
            '</div>'
          );
        }).join('');

        container.querySelectorAll('.quick-topic-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const topic = btn.getAttribute('data-select-topic');
            if (byId('waTopicSelect')) byId('waTopicSelect').value = topic;
            updateWhatsappDeepLink();
            showToast('Selected counselor focus: ' + topic);
          });
        });
      }

      function renderQuizModal() {
        const container = byId('quizQuestionsContainer');
        if (!container) return;
        container.innerHTML = WEDWISE_CONFIG.quizQuestions.map(function(item, idx) {
          return (
            '<div class="p-3 rounded-3 bg-white border border-ww-gold">' +
              '<div class="small fw-bold text-ww-purple mb-1" style="font-size:0.7rem;">' + (item.category || 'Compatibility') + '</div>' +
              '<div class="fw-semibold mb-2">' + item.q + '</div>' +
              '<div class="d-flex flex-column gap-1">' +
                item.options.map(function(opt, oIdx) {
                  const checked = oIdx === 0 ? 'checked' : '';
                  return (
                    '<label class="d-flex align-items-center gap-2 cursor-pointer">' +
                      '<input type="radio" name="quiz_q_' + idx + '" value="' + (3 - oIdx) + '" data-opt-label="' + opt + '" ' + checked + ' />' +
                      '<span>' + opt + '</span>' +
                    '</label>'
                  );
                }).join('') +
              '</div>' +
            '</div>'
          );
        }).join('');
      }

      function switchPage(target, optionalTopic) {
        currentPage = target === 'counseling' ? 'counseling' : 'home';
        const homeEl = byId('pageHome');
        const counselingEl = byId('pageCounseling');
        const topHomeBtn = byId('topSwitchHome');
        const topCounselingBtn = byId('topSwitchCounseling');

        if (currentPage === 'counseling') {
          if (homeEl) homeEl.classList.add('d-none');
          if (counselingEl) counselingEl.classList.remove('d-none');
          if (topCounselingBtn) {
            topCounselingBtn.style.background = '#E6A04A';
            topCounselingBtn.style.color = '#343039';
            topCounselingBtn.classList.remove('text-white');
          }
          if (topHomeBtn) {
            topHomeBtn.style.background = 'transparent';
            topHomeBtn.classList.add('text-white');
          }
          if (optionalTopic && byId('waTopicSelect')) {
            byId('waTopicSelect').value = optionalTopic;
            updateWhatsappDeepLink();
          }
        } else {
          if (counselingEl) counselingEl.classList.add('d-none');
          if (homeEl) homeEl.classList.remove('d-none');
          if (topHomeBtn) {
            topHomeBtn.style.background = '#E6A04A';
            topHomeBtn.style.color = '#343039';
            topHomeBtn.classList.remove('text-white');
          }
          if (topCounselingBtn) {
            topCounselingBtn.style.background = 'transparent';
            topCounselingBtn.classList.add('text-white');
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function updateReadinessSliders() {
        const sFin = byId('sliderFin');
        const sFam = byId('sliderFam');
        const sLife = byId('sliderLife');
        if (!sFin || !sFam || !sLife) return;

        const fin = parseInt(sFin.value, 10);
        const fam = parseInt(sFam.value, 10);
        const life = parseInt(sLife.value, 10);

        setText('scoreFinVal', fin + '% Discussed');
        setText('scoreFamVal', fam + '% Discussed');
        setText('scoreLifeVal', life + '% Discussed');

        const avg = Math.round((fin + fam + life) / 3);
        let lowestTopic = 'Family';
        let lowestLabel = 'Family Expectations & Boundaries';
        if (fin <= fam && fin <= life) {
          lowestTopic = 'Finances';
          lowestLabel = 'Finances, Debt & Savings Goals';
        } else if (life <= fin && life <= fam) {
          lowestTopic = 'Intimacy & Lifestyle';
          lowestLabel = 'Career Moves & Lifestyle Roles';
        }

        const tier = avg >= 75 ? 'Strong Alignment' : (avg >= 50 ? 'Good Foundation' : 'Important Conversations Ahead');
        setText('readinessSummaryTitle', 'Alignment Readiness: ' + avg + '% — ' + tier);
        setText('readinessSummaryDesc', 'Recommended focus: ' + lowestLabel + '.');
        const recBtn = byId('bookRecommendedTopicBtn');
        if (recBtn) recBtn.setAttribute('data-recommended-topic', lowestTopic);
      }

      function updateWhatsappDeepLink() {
        const topicEl = byId('waTopicSelect');
        const timeEl = byId('waTimeSelect');
        const wedEl = byId('waWeddingDate');
        const partEl = byId('waParticipantSelect');
        if (!topicEl || !timeEl || !partEl) return;

        const topic = topicEl.value;
        const time = timeEl.value;
        const wedding = wedEl ? wedEl.value.trim() : '';
        const participant = partEl.value;

        let textMsg = "Hi! I'd like to book a Premarital Counseling session. Topic: " + topic + " | Preferred time: " + time + " | Joining: " + participant;
        if (wedding) textMsg += " | Wedding: " + wedding;

        const waUrl = 'https://wa.me/' + WEDWISE_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(textMsg);
        setText('waMessagePreview', '“' + textMsg + '”');
        if (byId('dynamicWaButton')) byId('dynamicWaButton').setAttribute('href', waUrl);
        if (byId('heroWhatsappDirectLink')) byId('heroWhatsappDirectLink').setAttribute('href', waUrl);
      }

      /* ========================================================================
         EVENT LISTENERS & COMPATIBILITY REPORT GATE
         ======================================================================== */
      on('topSwitchHome', 'click', function() { switchPage('home'); });
      on('topSwitchCounseling', 'click', function() { switchPage('counseling'); });
      on('brandLogoBtn', 'click', function() { switchPage('home'); });
      on('headerBookBtn', 'click', function() { switchPage('counseling'); });
      on('heroStartJourneyBtn', 'click', function() { switchPage('counseling'); });
      on('phoneMockupBtn', 'click', function() { if (byId('quizModal')) byId('quizModal').classList.add('show'); });
      on('laptopMockupBtn', 'click', function() { switchPage('counseling'); });
      on('pillarExpertBookBtn', 'click', function() { switchPage('counseling'); });
      on('backToHomeBtn', 'click', function() { switchPage('home'); });

      document.querySelectorAll('[data-nav-target]').forEach(function(btn) {
        btn.addEventListener('click', function() { switchPage(btn.getAttribute('data-nav-target')); });
      });

      document.querySelectorAll('[data-scroll-to]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          const targetId = btn.getAttribute('data-scroll-to');
          if (currentPage !== 'home') switchPage('home');
          setTimeout(function() {
            const el = byId(targetId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        });
      });

      on('langToggleBtn', 'click', function() {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        const dict = WEDWISE_CONFIG.i18n[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
          const key = el.getAttribute('data-i18n');
          if (dict[key]) el.textContent = dict[key];
        });
        showToast(currentLang === 'hi' ? 'भाषा बदली गई: हिंदी' : 'Language set to English');
      });

      on('prevPromptBtn', 'click', function() {
        currentPromptIndex = (currentPromptIndex - 1 + WEDWISE_CONFIG.prompts.length) % WEDWISE_CONFIG.prompts.length;
        renderPrompt();
      });
      on('nextPromptBtn', 'click', function() {
        currentPromptIndex = (currentPromptIndex + 1) % WEDWISE_CONFIG.prompts.length;
        renderPrompt();
      });
      on('openPromptsBtn', 'click', function() {
        const sec = byId('interactivePreviewSection');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        currentPromptIndex = (currentPromptIndex + 1) % WEDWISE_CONFIG.prompts.length;
        renderPrompt();
      });
      on('sharePromptWhatsappBtn', 'click', function() {
        const p = WEDWISE_CONFIG.prompts[currentPromptIndex];
        window.open('https://wa.me/?text=' + encodeURIComponent('Hey! Let us discuss this WedWise Couple Prompt together: ' + p.en), '_blank', 'noopener');
      });

      ['sliderFin', 'sliderFam', 'sliderLife'].forEach(function(id) {
        on(id, 'input', updateReadinessSliders);
      });
      on('bookRecommendedTopicBtn', 'click', function(e) {
        switchPage('counseling', e.currentTarget.getAttribute('data-recommended-topic') || 'Family');
      });

      document.querySelectorAll('.course-filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          currentCourseFilter = btn.getAttribute('data-course-filter');
          document.querySelectorAll('.course-filter-btn').forEach(function(b) { b.classList.remove('active'); });
          btn.classList.add('active');
          renderCourses();
        });
      });

      ['waTopicSelect', 'waTimeSelect', 'waWeddingDate', 'waParticipantSelect'].forEach(function(id) {
        on(id, 'input', updateWhatsappDeepLink);
        on(id, 'change', updateWhatsappDeepLink);
      });
      on('copyWaUrlBtn', 'click', function() {
        const preview = byId('waMessagePreview');
        if (preview) copyText(preview.textContent, 'Copied booking message!');
      });

      function openQuizModal() {
        if (byId('quizQuestionsStep')) byId('quizQuestionsStep').classList.remove('d-none');
        if (byId('quizResultBox')) byId('quizResultBox').classList.add('d-none');
        if (byId('quizModal')) byId('quizModal').classList.add('show');
      }
      on('openQuizBtn', 'click', openQuizModal);
      on('footerQuizBtn', 'click', openQuizModal);
      on('mobileAssessBtn', 'click', openQuizModal);
      on('mobileConnectBtn', 'click', function() {
        switchPage('home');
        setTimeout(function() {
          const sec = byId('interactivePreviewSection');
          if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      });
      on('closeQuizModalBtn', 'click', function() { if (byId('quizModal')) byId('quizModal').classList.remove('show'); });

      // Step 1 -> Step 2: Calculate Quiz & Show Lead-Capture Gate
      on('calculateQuizBtn', 'click', function() {
        let total = 0;
        let lowestVal = 4;
        let priorityCat = 'Family Expectations & Boundaries';
        let priorityTopicKey = 'Family';
        const lines = [];

        WEDWISE_CONFIG.quizQuestions.forEach(function(item, idx) {
          const checked = document.querySelector('input[name="quiz_q_' + idx + '"]:checked');
          const val = checked ? parseInt(checked.value, 10) : 2;
          const optLabel = checked ? checked.getAttribute('data-opt-label') : '';
          total += val;
          lines.push((idx + 1) + '. ' + item.category + ': ' + optLabel);
          if (val < lowestVal) {
            lowestVal = val;
            priorityCat = item.category;
            priorityTopicKey = item.topicKey || 'General';
          }
        });

        const pct = Math.round((total / (WEDWISE_CONFIG.quizQuestions.length * 3)) * 100);
        lastQuizState = { pct: pct, priorityCategory: priorityCat, priorityTopicKey: priorityTopicKey, summaryLines: lines };

        setText('quizScoreNumber', pct + '%');
        setText('quizPriorityAreaText', 'Priority Discussion Topic: ' + priorityCat);

        if (byId('quizBlurredBreakdown')) byId('quizBlurredBreakdown').classList.remove('unlocked');
        if (byId('quizQuestionsStep')) byId('quizQuestionsStep').classList.add('d-none');
        if (byId('quizResultBox')) byId('quizResultBox').classList.remove('d-none');
      });

      on('retakeQuizBtn', 'click', function() {
        if (byId('quizResultBox')) byId('quizResultBox').classList.add('d-none');
        if (byId('quizQuestionsStep')) byId('quizQuestionsStep').classList.remove('d-none');
      });

      // Unlock & Send Compatibility Report via WhatsApp (Primary Engagement Lead Capture)
      on('sendReportWhatsappBtn', 'click', function() {
        const name = (byId('leadNameInput') ? byId('leadNameInput').value.trim() : '') || 'Couple';
        const contact = (byId('leadContactInput') ? byId('leadContactInput').value.trim() : '');
        if (byId('quizBlurredBreakdown')) byId('quizBlurredBreakdown').classList.add('unlocked');

        let msg = "Hi WedWise! I just completed the 5-Question Compatibility Check and would love to receive my full Couple Alignment Report.\n\n" +
                  "• Name: " + name + (contact ? " (" + contact + ")" : "") + "\n" +
                  "• Readiness Index: " + lastQuizState.pct + "%\n" +
                  "• Priority Focus Area: " + lastQuizState.priorityCategory + "\n" +
                  "• Responses:\n  " + lastQuizState.summaryLines.join("\n  ");

        const waUrl = 'https://wa.me/' + WEDWISE_CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg);
        window.open(waUrl, '_blank', 'noopener');
        showToast('Report unlocked & sent to WhatsApp!');
      });

      // Unlock & Request Report via Email
      on('sendReportEmailBtn', 'click', function() {
        const name = (byId('leadNameInput') ? byId('leadNameInput').value.trim() : '') || 'Couple';
        const contact = (byId('leadContactInput') ? byId('leadContactInput').value.trim() : '');
        if (!contact) {
          showToast('Please enter your email or WhatsApp number first');
          if (byId('leadContactInput')) byId('leadContactInput').focus();
          return;
        }
        if (byId('quizBlurredBreakdown')) byId('quizBlurredBreakdown').classList.add('unlocked');
        const subject = encodeURIComponent('WedWise Compatibility Report Request — ' + name);
        const body = encodeURIComponent(
          "Hi WedWise Team,\n\nPlease send my personalized Couple Alignment Report:\n" +
          "Name: " + name + "\nContact: " + contact + "\nReadiness Score: " + lastQuizState.pct + "%\nPriority Area: " + lastQuizState.priorityCategory + "\n\nResponses:\n" + lastQuizState.summaryLines.join("\n")
        );
        window.open('mailto:' + WEDWISE_CONFIG.supportEmail + '?subject=' + subject + '&body=' + body, '_self');
        showToast('Report unlocked & email draft opened!');
      });

      // Google Sign-In Gate (Client-Side GIS ready when googleClientId is set in config.json)
      on('googleSignInReportBtn', 'click', function() {
        if (!WEDWISE_CONFIG.googleClientId) {
          if (byId('quizBlurredBreakdown')) byId('quizBlurredBreakdown').classList.add('unlocked');
          showToast('Preview unlocked! (Set googleClientId in config.json to enforce Google OAuth)');
          return;
        }
        showToast('Redirecting to Google Sign-In...');
      });

      on('quizBookWhatsappBtn', 'click', function() {
        if (byId('quizModal')) byId('quizModal').classList.remove('show');
        switchPage('counseling', lastQuizState.priorityTopicKey);
      });

      function openPartnerModal() { if (byId('partnerModal')) byId('partnerModal').classList.add('show'); }
      on('partnerCodeModalBtn', 'click', openPartnerModal);
      on('footerInviteBtn', 'click', openPartnerModal);
      on('closePartnerModalBtn', 'click', function() { if (byId('partnerModal')) byId('partnerModal').classList.remove('show'); });
      on('regenPartnerCodeBtn', 'click', function() {
        setText('generatedPartnerCode', 'WW-' + Math.floor(1000 + Math.random() * 9000) + '-IN');
      });
      on('copyPartnerCodeBtn', 'click', function() {
        const el = byId('generatedPartnerCode');
        if (el) copyText(el.textContent, 'Copied Partner Invitation Code!');
      });
      on('shareCodeOnWhatsappBtn', 'click', function() {
        const el = byId('generatedPartnerCode');
        const code = el ? el.textContent : 'WW-8492-IN';
        window.open('https://wa.me/?text=' + encodeURIComponent('Hi! Join me on WedWise (Prepare for forever) using my single-use partner invitation code: ' + code), '_blank', 'noopener');
      });

      function initAll() {
        renderWhyAndPlans();
        renderPrompt();
        renderCourses();
        renderExperts();
        renderReviewsAndFaqs();
        updateReadinessSliders();
        updateWhatsappDeepLink();
        renderQuizModal();
      }

      initAll();

      // Automatically load external config.json when hosted on GitHub Pages
      fetch('config.json')
        .then(function(res) { return res.ok ? res.json() : null; })
        .then(function(externalCfg) {
          if (externalCfg) {
            Object.assign(WEDWISE_CONFIG, externalCfg);
            initAll();
          }
        })
        .catch(function() {});

    })();
