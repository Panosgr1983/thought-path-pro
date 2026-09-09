import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Briefcase, BookOpen, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import portrait from "@/assets/hero-portrait.png";

const TITLE = `Ευδοκία Τίντζη-Σαββιδάκη — Βιογραφικό | Ψυχολόγος Γαλάτσι`;
const DESCRIPTION =
  "Βιογραφικό της Ευδοκίας Τίντζη-Σαββιδάκη — Κοινωνική Ψυχολόγος, Παιδοψυχολόγος & Σύμβουλος Συνθετικής Συμβουλευτικής στο Γαλάτσι. Εκπαίδευση, πιστοποιήσεις, επαγγελματική εμπειρία. 36+ χρόνια με τον άνθρωπο.";

export const Route = createFileRoute("/viografiko")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/viografiko` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/viografiko` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ευδοκία Τίντζη-Σαββιδάκη",
          jobTitle:
            "Κοινωνική Ψυχολόγος · Παιδοψυχολόγος · Σύμβουλος Συνθετικής Συμβουλευτικής · Επόπτρια",
          worksFor: { "@type": "Organization", name: SITE.name },
          memberOf: [
            { "@type": "Organization", name: "Ελληνική Εταιρεία Συμβουλευτικής" },
            { "@type": "Organization", name: "European Association for Counselling" },
          ],
        }),
      },
    ],
  }),
  component: ViografikoPage,
});

type Credential = {
  title: string;
  org?: string;
  chips?: string[];
  note?: string;
};

const ACADEMIC: Credential[] = [
  {
    title: "Bachelor of Arts (BA) — Social Psychology",
    org: "Free European School of Economics (FESE) · Ζυρίχη, Ελβετία / Βύρτσμπουργκ, Γερμανία",
    chips: ["2009"],
    note: "Ακαδημαϊκός τίτλος (BA-FESE) στην Κοινωνική Ψυχολογία.",
  },
  {
    title: "Εξειδίκευση στην Παιδοψυχολογία & Συμβουλευτική Οικογενειών",
    org: "Κέντρο Επιμόρφωσης και Δια Βίου Μάθησης (Κ.Ε.ΔΙ.ΒΙ.Μ.) — Πανεπιστήμιο Αιγαίου",
    chips: ["2019–2020", "Ετήσιο πρόγραμμα", "Εξ αποστάσεως"],
    note: "Αντικείμενο: αναπτυξιακή ψυχολογία, ψυχοπαθολογία παιδιών και εφήβων, συμβουλευτική γονέων και οικογενειών, καθώς και σύγχρονες προσεγγίσεις αξιολόγησης και παρέμβασης στην παιδική και εφηβική ηλικία.",
  },
];

const COUNSELLING_STUDIES: Credential[] = [
  {
    title: "BTEC Level 5 Professional Certificate in Counselling and Counselling Skills",
    org: "Pearson / Edexcel — THACE",
    chips: ["2008"],
  },
  {
    title: "BTEC Level 7 Advanced Professional Diploma in Integrative Counselling",
    org: "Pearson / Edexcel — Athenian College",
    chips: ["2012"],
    note: "Το Δίπλωμα Συνθετικής Συμβουλευτικής (Integrative Counselling).",
  },
  {
    title: "Ειδική Εκπαίδευση Εποπτείας στην Αξιολογική Συμβουλευτική",
    org: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (ΕΚΠΑ) — ΚΕ.Α.Μ.Ψ.Υ. & ΕΛ.Ε.Π.ΨΥ.Σ.ΕΠ.",
    chips: ["2025", "54 ακαδημαϊκές ώρες"],
    note: "Οργανωμένο πρόγραμμα Ιανουαρίου – Φεβρουαρίου 2025.",
  },
];
const CHILD_AND_FAMILY: Credential[] = [
  {
    title: "Εκπαίδευση στη Συμβουλευτική Γονέων",
    org: "Ινστιτούτο Διαρκούς Εκπαίδευσης Ενηλίκων — Γενική Γραμματεία Εκπαίδευσης Ενηλίκων — Υπουργείο Παιδείας και Θρησκευμάτων",
    chips: ["2005", "40 ώρες"],
    note: "Πρόγραμμα διάρκειας 17/01/2005 – 18/04/2005, Αθήνα.",
  },
  {
    title: "«ΔΕΠΥ — Διάσπαση Προσοχής και Τεχνικές Αποκατάστασης | Το μυαλό μου κουβάρι»",
    org: "ΚΕ.ΘΕ.ΣΥ.",
    chips: ["2023"],
    note: "Εκπαιδευτικό τεκμήριο της εξειδίκευσης στη ΔΕΠΥ παιδιών και ενηλίκων.",
  },
  {
    title: "«Η Εφαρμογή της Παιγνιοθεραπείας στον Αυτισμό»",
    org: "Psychopedia.gr",
    chips: ["2020"],
    note: "Εκπαιδευτικό σεμινάριο στις 11/01/2020.",
  },
  {
    title:
      "«Επιθετικότητα στο παιδί και τον έφηβο — Εφαρμοσμένες μέθοδοι πρόληψης και αντιμετώπισης»",
    org: "Psychopedia.gr",
    chips: ["2019"],
    note: "Εκπαιδευτικό σεμινάριο στις 12/10/2019.",
  },
  {
    title: "«Η Παιγνιοθεραπεία στο Παιδί και τον Έφηβο — Βασικές Αρχές και Θεραπευτική Παρέμβαση»",
    org: "Psychopedia.gr",
    chips: ["2019"],
    note: "Εκπαιδευτικό σεμινάριο στις 19/10/2019. Συντονισμός: Μαριμπέλλα Βουρβούλου, Ψυχολόγος, Μάστερ Κλινικής Ψυχολογίας, Université Paris 8.",
  },
];

const MENTAL_HEALTH: Credential[] = [
  {
    title: "Ψυχοπαθολογία — Διαταραχές Προσωπικότητας",
    org: "Κέντρο «περί Ψυχής»",
    chips: ["2016", "8 ώρες"],
    note: "«Ποιες είναι και ποια τα βασικά χαρακτηριστικά τους». Συνεδρίες 23 & 30/10/2016.",
  },
  {
    title: "Μετατραυματικό Στρες & Αγχώδεις Διαταραχές",
    org: "Psychopedia.gr",
    chips: ["2017"],
    note: "Επιμορφωτικό σεμινάριο με συντονισμό ψυχολόγου με ειδίκευση στη Γνωσιακή Συμπεριφορική Ψυχοθεραπεία ενηλίκων και στην Κλινική Ψυχολογία.",
  },
  {
    title: "«Διαχείριση Συναισθηματικών Διαταραχών & Χρόνιου Πόνου»",
    org: "Psychopedia.gr — Κέντρο Δια Βίου Μάθησης",
    chips: ["2017", "6 ώρες"],
  },
  {
    title: "«Ψυχική & Σωματική Υγεία»",
    org: "Ανοιχτό Λαϊκό Πανεπιστήμιο — Τμήμα Αμαρουσίου",
    chips: ["2017–2018", "25 ώρες"],
  },
  {
    title: "Σεξουαλικές Δυσλειτουργίες και Διαταραχές",
    org: "Psychopedia.gr",
    chips: ["2017"],
    note: "Κλινική εικόνα, λήψη σεξουαλικού ιστορικού και θεραπεία. Συμμετοχή 14/10/2017.",
  },
  {
    title: "Αυτοτραυματισμός — Υποκατηγορίες Συμπεριφοράς και Κατάλληλη Διαχείριση",
    org: "Psychopedia.gr",
    chips: ["2018"],
    note: "Εκπαιδευτικό σεμινάριο στις 21/04/2018. Συντονισμός: Δήμητρα Τσικνή, MSc Κλινικής Ψυχολογίας.",
  },
  {
    title:
      "Κακοποιητικές, Χειριστικές & Εγκληματικές Προσωπικότητες — Αξιολόγηση και Κατάλληλη Διαχείριση",
    org: "Psychopedia.gr",
    note: "Επιμορφωτικό σεμινάριο e-learning. Συντονισμός: Δήμητρα Τσικνή, Ψυχολόγος, MSc Κλινικής Ψυχολογίας.",
  },
  {
    title: "Συμβουλευτική Παρέμβαση και Στήριξη σε Περίοδο Κρίσης",
    org: "Ελληνική Εταιρεία Συμβουλευτικής",
    chips: ["2020"],
    note: "Εφαρμογή του μοντέλου των 7 σταδίων παρέμβασης σε καταστάσεις κρίσεων (Albert R. Roberts). Εργαστήριο 12/12/2020.",
  },
  {
    title: "«Μαθήματα Ζωής για τη Διαχείριση Κρίσεων στις Ενδοοικογενειακές Σχέσεις»",
    org: "Ελληνική Εταιρεία Συμβουλευτικής",
    chips: ["2020"],
    note: "Διαχείριση κρίσεων από δοκιμασίες όπως COVID-19, lockdown και οικονομική κρίση, με αξιοποίηση κλειδιών EQ. Εργαστήριο 12/12/2020.",
  },
];

const CAREER_GUIDANCE: Credential[] = [
  {
    title: "Εκπαίδευση Συμβούλων στη διεξαγωγή Προγραμμάτων Επαγγελματικού Προσανατολισμού",
    org: "ISON PsychoMetrica · Αθήνα",
    chips: ["2019", "36 ώρες"],
    note: "Χρήση των τεστ προσωπικότητας, ικανοτήτων και ενδιαφερόντων e-mellon.",
  },
];

const CONFERENCES: Credential[] = [
  {
    title: "6ο Πανελλήνιο Διεπιστημονικό Συνέδριο Νόσου Alzheimer & Συγγενών Διαταραχών",
    org: "Θεσσαλονίκη",
    chips: ["2009", "18 ώρες"],
    note: "19–22/02/2009 — συμμετοχή στις εργασίες του συνεδρίου.",
  },
  {
    title: "«Η Ζωή μας μέσα από τα Όνειρα…»",
    org: "Διημερίδα — Χαροκόπειο Πανεπιστήμιο",
    chips: ["2009"],
    note: "14–15/03/2009.",
  },
  {
    title: "«Οι κρίσεις ως ευκαιρία επανασχεδιασμού της ζωής μας»",
    org: "Ανοιχτό Λαϊκό Πανεπιστήμιο",
    chips: ["2023", "5 ώρες"],
    note: "Διαδικτυακό πρόγραμμα e-learning — ολοκληρώθηκε στις 26/05/2023.",
  },
  {
    title: "Working with Lesbian, Gay & Bisexual Clients",
    org: "THACE — The Hellenic Association of Continuing Education",
    chips: ["2010"],
    note: "Διάλεξη του Counselling Department του THACE (14/01/2010).",
  },
  {
    title: "Σύμβουλος Ψυχικής Υγείας — Η Ταυτότητά του και η Δυναμική της",
    org: "Διημερίδα Ελληνικής Εταιρείας Συμβουλευτικής — IST College",
    chips: ["2015"],
    note: "Θεματικές: Ηθική — Δεοντολογία — Εποπτεία — Προσωπική Ανάπτυξη. 12–13/12/2015.",
  },
  {
    title: "Αγάπη — Έρωτας — Σεξ: Το Τρίπτυχο της Σχέσης",
    org: "Διημερίδα Ελληνικής Εταιρείας Συμβουλευτικής — Χαροκόπειο Πανεπιστήμιο",
    chips: ["2019"],
    note: "Συμμετοχή στις εργασίες της διημερίδας, 2–3/11/2019.",
  },
];

const MEMBERSHIPS = [
  { org: "Ελληνική Εταιρεία Συμβουλευτικής (ΕΕΣ)", id: "HAC 00149" },
  { org: "European Association for Counselling (EAC)", id: "Member No. 0202" },
];

const EDUCATION = [
  {
    period: "1993–2005",
    title: "Συστημικές Προσεγγίσεις",
    desc: "Εκπαίδευση σε συστημικές θεραπευτικές μεθόδους.",
  },
  {
    period: "2007–2010",
    title: "Ανθρωποκεντρική & Υπαρξιακή Συμβουλευτική",
    desc: "Person-centered και υπαρξιακές προσεγγίσεις.",
  },
  {
    period: "2013–2017",
    title: "Γνωσιακές Προσεγγίσεις",
    desc: "Γνωσιακή-Συμπεριφορική Θεραπεία (CBT) και σχετικές μέθοδοι.",
  },
];

const EXPERIENCE = [
  {
    period: "2013 – σήμερα",
    title: "Ίδρυση Διαδικτυακής Πύλης για την Οικογενειακή Βία",
    desc: "Δημιουργία και διεύθυνση πλατφόρμας ενημέρωσης και ευαισθητοποίησης για την ψηφιακή βία σε παιδιά και εφήβους και οικογένειες.",
  },
  {
    period: "2009 – σήμερα",
    title: "Συνεργασία με Εκπαιδευτικά Κέντρα ΑΜΕΑ",
    desc: "Ψυχολογική υποστήριξη παιδιών με αυτισμό και άλλες αναπτυξιακές διαταραχές.",
  },
  {
    period: "Πολυετής εμπειρία",
    title: "Προγράμματα Διαχείρισης Άγχους",
    desc: "Σχεδιασμός και υλοποίηση προγραμμάτων ψυχικής υγείας σε δημοτικές υπηρεσίες.",
  },
  {
    period: "Πολυετής εμπειρία",
    title: "Πρωτοβουλίες Ψυχικής Υγείας",
    desc: "Ηγεσία δράσεων ψυχικής υγείας μέσω κοινωνικών οργανώσεων.",
  },
];

const SEMINARS = [
  "Γνωσιακή-Συμπεριφορική Θεραπεία (CBT)",
  "Τραύμα και Μετατραυματικό Στρες",
  "Συναισθηματική Ρύθμιση",
  "Συμβουλευτική Πένθους και Απώλειας",
  "Γονεϊκή Καθοδήγηση",
  "Παιγνιοθεραπεία με Παιδιά και Εφήβους",
  "Bullying & Cyber Bullying",
  "Διατροφικές Διαταραχές",
  "Σεξουαλικότητα — Working with Lesbian, Gay and Bisexual Clients",
  "Αυτοτραυματισμός",
  "Κακοποιητικές, χειριστικές και εγκληματικές προσωπικότητες",
  "Σχέση ψυχικής με σωματική υγεία",
  "Διαχείριση συναισθηματικών διαταραχών και χρόνιου πόνου",
  "ΔΕΠΥ — Διάσπαση προσοχής και τεχνικές αποκατάστασης",
  "Σύμβουλος επαγγελματικού προσανατολισμού και σταδιοδρομίας με χρήση tests",
];

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Award;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="font-serif text-2xl text-ink md:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function CredGroup({ eyebrow, items }: { eyebrow: string; items: Credential[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <ol className="mt-4 space-y-4">
        {items.map((c) => (
          <li key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg leading-snug tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                {c.org && <p className="mt-1 text-sm font-medium text-muted-foreground">{c.org}</p>}
                {c.note && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                )}
              </div>
              {c.chips && (
                <div className="flex shrink-0 flex-col items-end gap-1.5">
                  {c.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-primary/20 bg-primary-soft/50 px-2.5 py-0.5 text-[11px] font-semibold text-primary"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ViografikoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Βιογραφικό
            </span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
              Ευδοκία Τίντζη-Σαββιδάκη
            </h1>
            <p className="mt-4 text-base font-medium text-muted-foreground md:text-lg">
              Κοινωνική Ψυχολόγος · Παιδοψυχολόγος · Σύμβουλος Συνθετικής Συμβουλευτικής · Επόπτρια
            </p>
          </div>
        </div>
      </section>

      {/* Full-width photo band */}
      <section className="bg-background">
        <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-96 lg:h-[28rem]">
          <img
            src={portrait}
            alt="Ευδοκία Τίντζη-Σαββιδάκη"
            className="h-full w-full object-cover object-[center_20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Λίγα λόγια για εμένα
          </span>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85 md:text-lg">
            <p>
              Με πολυετή εκπαίδευση και εμπειρία στον χώρο της ψυχικής υγείας, προσφέρω
              ολοκληρωμένες υπηρεσίες προσαρμοσμένες στις ανάγκες κάθε ατόμου, ζευγαριού ή
              οικογένειας.
            </p>
            <p>
              Η προσέγγισή μου είναι συνθετική: συνδυάζει στοιχεία από διαφορετικές θεραπευτικές
              σχολές, με στόχο να βρω αυτό που πραγματικά λειτουργεί για κάθε άνθρωπο που έρχεται
              απέναντί μου. Πιστεύω ότι κάθε διαδρομή είναι μοναδική και αξίζει χρόνο, σεβασμό και
              επιστημονική σοβαρότητα.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Δείτε τις υπηρεσίες
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader
            icon={Award}
            eyebrow="Σπουδές & επιμορφώσεις"
            title="Εκπαίδευση & Επαγγελματικά Προσόντα"
          />
          <div className="space-y-12">
            <CredGroup eyebrow="Ακαδημαϊκή εκπαίδευση" items={ACADEMIC} />
            <CredGroup
              eyebrow="Επαγγελματική εκπαίδευση στη συμβουλευτική"
              items={COUNSELLING_STUDIES}
            />
            <CredGroup eyebrow="Παιδοψυχολογία & οικογένεια" items={CHILD_AND_FAMILY} />
            <CredGroup eyebrow="Συμβουλευτική & ψυχική υγεία" items={MENTAL_HEALTH} />
            <CredGroup eyebrow="Επαγγελματικός προσανατολισμός" items={CAREER_GUIDANCE} />
            <CredGroup eyebrow="Συνέδρια & συνεχιζόμενη επιμόρφωση" items={CONFERENCES} />
          </div>
          <div className="mt-12 border-t border-border pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Επαγγελματικές ιδιότητες
            </p>
            <ul className="mt-4 space-y-3">
              {MEMBERSHIPS.map((m) => (
                <li
                  key={m.id}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-base text-foreground/85">{m.org}</span>
                  <span className="rounded-full border border-primary/20 bg-primary-soft/50 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {m.id}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader
            icon={GraduationCap}
            eyebrow="Μετεκπαίδευση"
            title="Ψυχοθεραπευτικές Προσεγγίσεις"
          />
          <ol className="space-y-5">
            {EDUCATION.map((e) => (
              <li key={e.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {e.period}
                </p>
                <h3 className="mt-2 font-serif text-xl text-ink">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader icon={Briefcase} eyebrow="Πορεία" title="Επαγγελματική Εμπειρία" />
          <ol className="space-y-5">
            {EXPERIENCE.map((x) => (
              <li key={x.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {x.period}
                </p>
                <h3 className="mt-2 font-serif text-xl text-ink">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <SectionHeader
            icon={BookOpen}
            eyebrow="Συνεχιζόμενη εκπαίδευση"
            title="Εξειδικευμένα Σεμινάρια"
          />
          <ul className="flex flex-wrap gap-2">
            {SEMINARS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Ας γνωριστούμε</h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Επικοινωνήστε μαζί μου
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
