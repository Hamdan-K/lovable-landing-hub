# localFix — Polished Core MVP

## Product direction
Build a coherent repair platform that takes a person from “something is broken” to a safe, actionable next step. The first release will cover the complete customer journey plus professional discovery, with a focused professional workspace rather than every secondary page in the original brief.

## Visual system
- **Palette:** Industrial Teal — `#F4F7F6`, `#182321`, `#168C7B`, `#E5B83B`, translated into accessible semantic light and dark tokens.
- **Typography:** Sora for headings and Manrope for interface and body text.
- **Structure:** Hero + Workspace, designed mobile-first rather than shrinking desktop screens.
- **Reference mapping:**
  - Landing page: the airy, centered product presentation and edge-mounted interface fragments from the first reference.
  - Customer platform: the clear tabbed hierarchy, structured metadata, and document/workspace density from the second reference.
  - Professional platform: the stronger dark visual register and confident marketplace framing from the third reference.
- Use original localFix repair imagery and interface compositions; the uploaded screenshots remain references and will not be embedded.
- Keep radii restrained, hierarchy strong, motion purposeful, and decorative effects minimal.

## First-release experience
1. **Landing page**
   - Clear localFix promise, prominent “What’s broken?” search, repair-category entry points, three-step journey, sample assessment, professional handoff, safety section, FAQ, and final action.
2. **Customer workspace**
   - Active, saved, recent, and completed repairs with practical summaries instead of decorative charts.
   - A consistent desktop sidebar/header and a purpose-built mobile navigation pattern.
3. **Guided diagnosis**
   - Progressive questions, editable previous answers, visible progress, photo upload, validation, and safe back/next behavior.
   - Hybrid assessment: deterministic guided intake first, then an AI-assisted summary with explicit uncertainty and safety limits.
4. **Repair assessment**
   - Likely issue and causes, confidence language, difficulty, time, tools, parts, estimated cost ranges, safety warnings, and four clear next paths.
5. **Repair guide**
   - Step-by-step instructions, preparation, progress tracking, tools/parts, testing, troubleshooting, and completion checklist optimized for use during a repair.
6. **Professional discovery**
   - Search/filter directory, credible profiles, services, ratings, approximate pricing, availability, and quote/request action integrated into assessment results.
7. **Professional workspace**
   - A focused view of incoming requests, active jobs, customer context, status changes, services, and profile completeness.

## Data and account behavior
- Enable Lovable Cloud for accounts, persistent repairs, uploaded photos, saved progress, professional profiles, requests, and server-side AI calls.
- Use separate customer and professional role records with server-verified permissions.
- Seed realistic scenarios such as a laptop that will not power on, a leaking washing machine, a slipping bicycle chain, and a slow phone charging port.
- No payments in this MVP; pricing is informational and quote-based.

## Quality and trust
- Distinguish user statements, possible causes, estimates, and confirmed information.
- Escalate hazardous electrical, gas, structural, battery, and similar work to professionals.
- Cover loading, empty, error, invalid-input, upload-failure, no-results, and permission states.
- Add accessible labels, keyboard/focus behavior, strong contrast, large touch targets, and reduced-motion support.
- Give every content page unique search and social metadata.

## Verification
- Verify the complete customer path from landing search through diagnosis, assessment, saved repair, guide progress, and professional request.
- Verify the professional request appears in the professional workspace.
- Check desktop and mobile layouts for clipping, overlap, readable density, and usable fixed actions.
- Confirm the final preview has no build, runtime, console, or failed-network errors.

## Assumptions
- English-language launch with location displayed generically in demo data.
- AI output is advisory, not a guaranteed diagnosis.
- Authentication and persistence are included because saved progress and role-separated workspaces require them.
- Secondary pages such as earnings, full review management, and advanced settings remain outside this core MVP.
