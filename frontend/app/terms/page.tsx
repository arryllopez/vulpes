"use client";

import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <main className="min-h-screen bg-white relative">
          <div data-scroll-sentinel className="absolute top-0 left-0 h-1 w-full" />

        <article className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-12">
            Last updated: January 30, 2026
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Trivvi (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the Trivvi platform, including our website at trivvi.io and our mobile applications (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-gray-700 mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Eligibility
              </h2>
              <p className="text-gray-700 mb-4">
                You must be at least 13 years old to use the Service. By using the Service, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>You are at least 13 years of age (or the age of majority in your jurisdiction if higher)</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You are not prohibited from using the Service under applicable law</li>
                <li>If you are using the Service on behalf of a business (as a restaurant partner), you have authority to bind that business to these Terms</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                User Accounts
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">Account Creation</h3>
              <p className="text-gray-700 mb-4">
                To access certain features of the Service, you may need to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">Consumer Accounts (Diners)</h3>
              <p className="text-gray-700 mb-4">
                Consumer accounts allow you to discover and receive notifications about offers from nearby restaurants. You are responsible for the accuracy of any location information you provide.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Business Accounts (Restaurant Partners)</h3>
              <p className="text-gray-700 mb-4">
                Business accounts allow restaurants to post offers and alerts to nearby diners. By creating a business account, you represent that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>You are authorized to act on behalf of the restaurant</li>
                <li>All business information provided is accurate</li>
                <li>You will honor all offers and promotions posted through the Service</li>
                <li>You have all necessary licenses and permits to operate your restaurant</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                The Trivvi Service
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">What We Provide</h3>
              <p className="text-gray-700 mb-4">
                Trivvi is a platform that connects restaurants with nearby diners through location-based offer notifications. We provide:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>A marketplace for restaurants to post time-sensitive offers and alerts</li>
                <li>Location-based notifications to help diners discover nearby offers</li>
                <li>Analytics and dashboard tools for restaurant partners</li>
                <li>Communication features between our platform and users</li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-3">Marketplace Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                <strong>Trivvi is a platform, not a party to transactions.</strong> We facilitate connections between restaurants and diners but are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>The quality, safety, or legality of restaurant food or services</li>
                <li>The accuracy of offers posted by restaurants</li>
                <li>Whether restaurants honor their posted offers</li>
                <li>Any disputes between restaurants and diners</li>
                <li>Restaurant compliance with health, safety, or other regulations</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Any transaction or interaction resulting from the Service is solely between the restaurant and the diner. Trivvi is not liable for any claims arising from such transactions.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">No Guarantees</h3>
              <p className="text-gray-700 mb-4">
                We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>That the Service will always be available, uninterrupted, or error-free</li>
                <li>Any particular level of foot traffic, revenue, or business results for restaurants</li>
                <li>The availability of offers in any particular area</li>
                <li>That any specific restaurant or offer will be available</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Acceptable Use
              </h2>
              <p className="text-gray-700 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Violate any applicable law, regulation, or these Terms</li>
                <li>Post false, misleading, or fraudulent offers or information</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm others</li>
                <li>Send spam, unsolicited communications, or chain letters</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Use automated systems (bots, scrapers) without our permission</li>
                <li>Collect or harvest user data without consent</li>
                <li>Circumvent any security measures or access restrictions</li>
                <li>Post content that infringes intellectual property rights</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Founding Partners & Early Access
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">Restaurant Partners</h3>
              <p className="text-gray-700 mb-4">
                Restaurants who join the waitlist become our <strong>founding partners</strong> and receive free early access to the Trivvi app. Further details will be provided when Trivvi launches in your area.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Consumer Accounts</h3>
              <p className="text-gray-700 mb-4">
                The Service is free for diners (consumers). We may introduce premium features in the future.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">Our Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                The Service and its contents, including but not limited to text, graphics, logos, icons, images, software, and code, are owned by Trivvi or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Limited License</h3>
              <p className="text-gray-700 mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for its intended purpose, subject to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Your Content</h3>
              <p className="text-gray-700 mb-4">
                You retain ownership of content you submit to the Service (such as restaurant information and offers). By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content in connection with operating the Service.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Feedback</h3>
              <p className="text-gray-700 mb-4">
                If you provide feedback or suggestions about the Service, you grant us the right to use such feedback without compensation or attribution.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice, including if we believe you have violated these Terms.
              </p>
              <p className="text-gray-700 mb-4">
                You may terminate your account at any time by contacting us or through your account settings.
              </p>
              <p className="text-gray-700 mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Your right to use the Service immediately ceases</li>
                <li>We may delete your account and data (subject to our Privacy Policy)</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Disclaimers
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
              </p>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of any content</li>
                <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRIVVI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Loss of profits, revenue, or business</li>
                <li>Loss of data or goodwill</li>
                <li>Service interruption or computer damage</li>
                <li>Any damages arising from your use of the Service</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Our total liability for any claims arising from or related to the Service shall not exceed the greater of: (a) the amount you paid to us in the 12 months preceding the claim, or (b) $100 CAD.
              </p>
              <p className="text-gray-700 mb-4">
                Some jurisdictions do not allow limitation of liability for certain damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Indemnification
              </h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless Trivvi, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit to the Service</li>
                <li>Any offers or transactions between restaurants and diners</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Governing Law and Disputes
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
              <p className="text-gray-700 mb-4">
                Any dispute arising from these Terms or the Service shall be resolved in the courts of Ontario, Canada, and you consent to the exclusive jurisdiction of such courts.
              </p>
              <p className="text-gray-700 mb-4">
                Before initiating formal legal proceedings, you agree to attempt to resolve any dispute informally by contacting us at contact@trivvi.io.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                General Provisions
              </h2>

              <h3 className="text-xl font-semibold text-black mb-3">Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Trivvi regarding the Service.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Waiver</h3>
              <p className="text-gray-700 mb-4">
                Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.
              </p>

              <h3 className="text-xl font-semibold text-black mb-3">Assignment</h3>
              <p className="text-gray-700 mb-4">
                You may not assign or transfer your rights under these Terms without our consent. We may assign our rights without restriction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We may modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the &quot;Last updated&quot; date. For significant changes, we may also notify you by email.
              </p>
              <p className="text-gray-700 mb-4">
                Your continued use of the Service after changes take effect constitutes acceptance of the revised Terms. If you do not agree to the revised Terms, you must stop using the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> contact@trivvi.io<br />
                <strong>Website:</strong> trivvi.io
              </p>
            </section>
          </div>
        </article>

        <div className="relative z-10 bg-white font-(family-name:--font-caudex) text-black [&_a]:text-black [&_span]:text-black [&_div]:text-black">
          <Footer
            logo={
              <Image
                src="/imageAssets/trivviLogo.svg"
                alt="Trivvi Logo"
                width={40}
                height={40}
              />
            }
            brandName="Trivvi"
            socialLinks={[
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://x.com/trivviapp?s=21",
                label: "X",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://www.instagram.com/trivvi.io/",
                label: "Instagram",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                ),
                href: "https://www.tiktok.com/@trivviapp",
                label: "TikTok",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: "mailto:contact@trivvi.io",
                label: "Email",
              },
            ]}
            mainLinks={[
              { href: "/for-diners", label: "For Diners" },
              { href: "/for-restaurants", label: "For Restaurants" },
              { href: "/about", label: "About" },
              { href: "mailto:contact@trivvi.io", label: "Contact" },
            ]}
            legalLinks={[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ]}
            copyright={{
              text: "© 2026 Trivvi",
              license: "All rights reserved",
            }}
          />
        </div>
        </main>
      </SmoothScroll>
    </>
  );
}
