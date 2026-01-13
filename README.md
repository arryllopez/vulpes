# Project Plan: Vulpes

## 1. Project Overview

**Vulpes** is a real-time, location-based platform that allows restaurants to publish limited-time offers during low-traffic hours. Nearby users are notified when offers go live, helping restaurants fill empty tables while enabling customers to save money on local dining.

The project follows a **validation-first approach**, beginning with a static website and waitlist to measure real interest before building a full product.

---

## 2. Problem Statement

Restaurants—especially independent and small local establishments—experience uneven demand throughout the day. Peak hours are busy, while off-peak hours result in empty tables, wasted capacity, and lost revenue.

Existing solutions:
- Take high commissions  
- Encourage constant discounting  
- Lack real-time responsiveness  
- Do not target nearby, ready-to-dine customers  

As a result, restaurants struggle to convert slow hours into foot traffic without sacrificing margins.

---

## 3. Proposed Solution

Vulpes enables restaurants to:
- Create and activate **time-limited offers**
- Control **when** and **what** discounts appear
- Reach **nearby users in real time**

Customers:
- Discover live deals close to them
- Get notified only when offers are relevant
- Save money while supporting local businesses

Vulpes is opt-in, free to start, and fully restaurant-controlled.

---

## 4. Validation-First Strategy (Pre-MVP)

Before building the platform, Vulpes will launch as a **static marketing website** designed to validate demand.

### Static Website Goals
- Clearly explain the concept
- Separate messaging for:
  - Restaurants
  - Customers
- Capture interest via waitlists

### Waitlists
- **Restaurant waitlist:** owner contact info, interest level, willingness to pilot
- **Customer waitlist:** location, interest, dining habits

### Promotion Strategy
- In-person outreach to nearby restaurants
- Campus posters and QR codes
- Word-of-mouth among students
- Direct conversations with owners

**Validation success criteria:**
- 5–10 restaurants on the waitlist  
- 50–100 customers signed up  

Only after this signal will development proceed.

---

## 5. Target Audience

### Restaurants
- Independent and small-chain restaurants
- Located in walkable, dense areas
- Initial focus on restaurants near university campuses

### Customers
- Students and young adults
- Price-sensitive and mobile-first
- Likely to dine spontaneously based on proximity

---

## 6. MVP Scope (Post-Validation)

### Restaurant Features
- Account creation and authentication
- Create, activate, and deactivate offers
- Set time windows for offers
- View basic engagement metrics

### Customer Features
- View nearby active offers
- Receive notifications when offers go live
- Simple in-person redemption flow

### Backend Capabilities
- Time-based offer activation and expiration
- Location-based filtering
- Role-based access control
- Basic analytics logging

---

## 7. Out of Scope (Initial MVP)

To avoid overengineering:
- Payments and online ordering
- Reviews or ratings
- Loyalty programs
- AI recommendations
- Multi-city expansion
- Advanced analytics dashboards

---

## 8. Technical Architecture (High-Level)

- **Backend:** Spring Boot (monolithic REST API)
- **Database:** PostgreSQL
- **Authentication:** JWT
- **Frontend:** Static site → Web app (React / Next.js)
- **Notifications:** Manual initially, automated later
- **Deployment:** Single cloud environment

The system prioritizes simplicity, reliability, and extensibility.

---

## 9. Rollout Strategy

### Phase 0: Discovery (1–2 weeks)
- Talk to 5–10 restaurant owners
- Identify slow hours and objections
- Validate the core pain point

**Success:** At least 2 restaurants willing to pilot.

---

### Phase 1: Static Site + Waitlist (2 weeks)
- Launch static website
- Promote locally
- Collect waitlist signups

**Success:** Clear interest from both restaurants and users.

---

### Phase 2: Campus Pilot MVP (4–6 weeks)
- Build and deploy MVP
- Manually onboard 5–8 restaurants
- Invite waitlisted users

**Success:** At least one real offer redemption.

---

### Phase 3: Iteration (4 weeks)
- Improve UX and reliability
- Add basic analytics
- Refine notification logic

**Success:** Restaurants request continued usage.

---

## 10. Projected Pilot Usage

| Metric | Target |
|------|------|
| Restaurants | 5–10 |
| Waitlisted Users | 50–100 |
| Active Users | 100–300 |
| Redemptions | Small but consistent |

Focus is on **behavior change**, not scale.

---

## 11. Risks & Mitigation

**Low Waitlist Interest**  
→ Re-evaluate messaging or problem framing

**Restaurant Skepticism**  
→ Emphasize no contracts, no fees, full control

**User Notification Fatigue**  
→ Strict relevance-based notifications

**Overengineering**  
→ Development gated behind validation

---

## 12. Success Criteria

Vulpes is successful if:
- Restaurants willingly participate
- Users redeem offers
- Traffic increases during slow hours
- The system demonstrates real-world impact

Monetization and scaling are intentionally deferred.

---

## 13. Positioning

Vulpes is positioned as:
- A **demand-balancing tool**, not a coupon app
- A **community-first platform**, not extractive tech
- A **real-world systems project**, not a demo

---

## 14. Tagline

**Smart eats live nearby.**  
*Keeping local tables full.*