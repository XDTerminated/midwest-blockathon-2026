import { CATEGORIES } from "@immivault/shared";
import type { CategorySlug, CaseListItem } from "@immivault/shared";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { CaseCard } from "@/components/CaseCard";
import { AppLayout } from "@/components/layout/AppLayout";
import { SearchBar } from "@/components/SearchBar";
import { listCasesByCategory } from "@/lib/api";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return (
      <AppLayout>
        <div className="max-w-2xl mx-auto px-4 py-12 text-center">
          <p className="text-[#2E323A]">Category not found.</p>
          <Link href="/" className="text-[#C9A54E] hover:underline text-sm mt-4 inline-block">
            Back to home
          </Link>
        </div>
      </AppLayout>
    );
  }

  let cases: CaseListItem[] = [];
  try {
    const result = await listCasesByCategory(slug as CategorySlug);
    cases = result.cases;
  } catch {
    // API may not be running; show empty state.
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#2E323A] hover:text-[#e8e8f0] mb-6 transition">
          <ArrowLeft className="w-3.5 h-3.5" /> All Categories
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{category.emoji}</span>
          <h1 className="text-2xl font-bold text-[#e8e8f0]">{category.label}</h1>
        </div>
        <p className="text-[#8a8ea0] text-sm mb-6">{category.description}</p>

        <div className="mb-8">
          <SearchBar
            defaultValue={category.label}
            variant="compact"
          />
        </div>

        {cases.length === 0 ? (
          <div className="bg-[#161A24] border border-[#2E323A] rounded-xl p-8 text-center">
            <p className="text-[#2E323A] text-sm">
              No cases yet in this category.{" "}
              <Link href="/upload" className="text-[#C9A54E] hover:underline">
                Be the first to share your case
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((item) => (
              <CaseCard key={item.cid} item={item} />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
