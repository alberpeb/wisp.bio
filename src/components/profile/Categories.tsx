import { CustomLinkModel, CategoriesProps } from "@/prisma/userService";

export default function Categories({categories}: CategoriesProps) {
    return(
        <section className="mb-4 mt-2 flex">
            {categories.map((category, i) => (
                <span key={i} className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {category.category}
                </span>
            ))}
        </section>
    );
}