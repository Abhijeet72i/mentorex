// data/subjects.ts
import { Calculator, Atom, BookOpen, Code2, BrainCircuit, Languages, LucideIcon } from "lucide-react";

export interface SubjectLevel {
  stage: string;
  ageRange: string;
  focus: string;
  minGrade: number;
  maxGrade: number;
}

export interface Subject {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  levels: SubjectLevel[];
  topics: string[];
  outcomes: string[];
}

export const subjects: Subject[] = [
  {
    slug: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    tagline: "From counting to calculus, one concept at a time.",
    description: "Our Mathematics tutoring covers every stage of a student's academic journey — from early Kindergarten number sense through university-level calculus and statistics.",
    levels: [
      { stage: "Kindergarten - Primary", ageRange: "Ages 4-11", focus: "Number sense, basic operations, shapes, and problem-solving fundamentals.", minGrade: 0, maxGrade: 5 },
      { stage: "Secondary", ageRange: "Ages 11-16", focus: "Algebra, geometry, trigonometry, and GCSE / Year 10 exam preparation.", minGrade: 6, maxGrade: 10 },
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "Calculus, statistics, A-Level and VCE/HSC exam preparation.", minGrade: 11, maxGrade: 12 },
      { stage: "University", ageRange: "Undergraduate", focus: "Linear algebra, multivariable calculus, probability, and applied statistics.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Arithmetic & Number Sense", "Algebra & Functions", "Geometry & Trigonometry", "Calculus", "Statistics & Probability", "Exam-Specific Problem Solving"],
    outcomes: ["Stronger grasp of core mathematical concepts", "Improved exam confidence and technique", "Ability to work through problems independently", "Steady grade improvement tracked each term"],
  },
  {
    slug: "science",
    title: "Science",
    icon: Atom,
    tagline: "Physics, Chemistry, and Biology made clear.",
    description: "Our Science tutors break down Physics, Chemistry, and Biology into clear, exam-focused explanations — from primary-level discovery science through university foundation courses.",
    levels: [
      { stage: "Kindergarten - Primary", ageRange: "Ages 4-11", focus: "Discovery science, the natural world, and basic scientific method.", minGrade: 0, maxGrade: 5 },
      { stage: "Secondary", ageRange: "Ages 11-16", focus: "Combined or triple Science, GCSE-level Physics, Chemistry, and Biology.", minGrade: 6, maxGrade: 10 },
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "A-Level / VCE / HSC Physics, Chemistry, and Biology specialisation.", minGrade: 11, maxGrade: 12 },
      { stage: "University", ageRange: "Undergraduate", focus: "Foundation-level Physics, Chemistry, and Biology modules.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Scientific Method", "Physics: Forces, Energy, Electricity", "Chemistry: Atomic Structure, Reactions", "Biology: Cells, Genetics, Ecosystems", "Practical & Lab-Based Reasoning", "Exam Technique & Past Papers"],
    outcomes: ["Clearer understanding of core scientific principles", "Confidence tackling practical and theory questions", "Better exam technique for multi-part questions", "Improved retention through applied examples"],
  },
  {
    slug: "english",
    title: "English",
    icon: BookOpen,
    tagline: "Reading, writing, and grammar for every level.",
    description: "From early phonics and reading comprehension through advanced essay writing and literary analysis, our English tutors help students build both fluency and confidence.",
    levels: [
      { stage: "Kindergarten - Primary", ageRange: "Ages 4-11", focus: "Phonics, reading comprehension, vocabulary, and basic writing.", minGrade: 0, maxGrade: 5 },
      { stage: "Secondary", ageRange: "Ages 11-16", focus: "Essay structure, grammar, literature analysis, GCSE preparation.", minGrade: 6, maxGrade: 10 },
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "Advanced composition, critical analysis, A-Level literature.", minGrade: 11, maxGrade: 12 },
      { stage: "University", ageRange: "Undergraduate", focus: "Academic writing, referencing, and communication skills.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Reading Comprehension", "Grammar & Sentence Structure", "Essay & Creative Writing", "Literary Analysis", "Vocabulary Building", "Academic & Professional Writing"],
    outcomes: ["Improved reading comprehension and vocabulary", "Clearer, more structured writing", "Confidence analysing literature and texts", "Stronger performance in written exams"],
  },
  {
    slug: "programming",
    title: "Programming",
    icon: Code2,
    tagline: "From your first line of code to real projects.",
    description: "Whether a student is writing their first program or preparing for a university computer science module, our Programming tutors teach practical, project-based coding.",
    levels: [
      { stage: "Primary - Early Secondary", ageRange: "Ages 8-13", focus: "Introduction to logic, block-based coding, and simple Python or Scratch.", minGrade: 3, maxGrade: 8 },
      { stage: "Secondary", ageRange: "Ages 13-16", focus: "Python or JavaScript fundamentals, GCSE Computer Science.", minGrade: 9, maxGrade: 10 },
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "A-Level Computer Science, algorithms, and data structures.", minGrade: 11, maxGrade: 12 },
      { stage: "University", ageRange: "Undergraduate", focus: "Core CS modules, web development, and coursework support.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Programming Fundamentals", "Python & JavaScript", "Data Structures & Algorithms", "Web Development Basics", "Debugging & Problem Solving", "Project-Based Learning"],
    outcomes: ["Ability to write and debug real programs", "Solid understanding of programming logic", "Portfolio-ready personal projects", "Preparation for CS coursework and exams"],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    tagline: "Practical, project-based AI education.",
    description: "Our AI & Machine Learning sessions are designed for secondary and university-level students ready to go beyond the basics — covering ML fundamentals through applied AI concepts.",
    levels: [
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "Introduction to AI concepts, Python for data, and basic ML theory.", minGrade: 11, maxGrade: 12 },
      { stage: "University", ageRange: "Undergraduate", focus: "Machine learning fundamentals, model building, and applied AI projects.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Python for Data Science", "ML Fundamentals & Algorithms", "Neural Networks Basics", "Applied AI Projects", "Model Evaluation", "Coursework & Capstone Support"],
    outcomes: ["Practical experience building ML models", "Solid grasp of core AI concepts", "Completed hands-on projects for a portfolio", "Confidence with university-level coursework"],
  },
  {
    slug: "languages",
    title: "Languages",
    icon: Languages,
    tagline: "Hindi, English, and French with expert tutors.",
    description: "Our language tutors teach Hindi, English, and French one-to-one, adapting to each student's age and goals — from foundational conversation skills to advanced fluency.",
    levels: [
      { stage: "Kindergarten - Primary", ageRange: "Ages 4-11", focus: "Basic vocabulary, conversation, and foundational reading.", minGrade: 0, maxGrade: 5 },
      { stage: "Secondary", ageRange: "Ages 11-16", focus: "Grammar, comprehension, and conversational fluency.", minGrade: 6, maxGrade: 10 },
      { stage: "Senior Secondary", ageRange: "Ages 16-18", focus: "Advanced fluency and exam-focused preparation.", minGrade: 11, maxGrade: 12 },
      { stage: "University / Adult", ageRange: "Any age", focus: "Conversational fluency, professional communication.", minGrade: 13, maxGrade: 13 },
    ],
    topics: ["Conversational Practice", "Grammar & Sentence Structure", "Reading & Listening Comprehension", "Vocabulary Building", "Written Expression", "Exam Preparation"],
    outcomes: ["Improved conversational confidence", "Stronger grammar and comprehension", "Exam-ready language skills", "Practical, real-world communication ability"],
  },
];

export function getSubjectBySlug(slug: string) {
  return subjects.find((s) => s.slug === slug);
}

export const gradeOptions = [
  { value: 0, label: "Kindergarten" },
  ...Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: `Grade ${i + 1}` })),
  { value: 13, label: "University Level" },
];