import { SimpleGrid} from "@chakra-ui/react";
import {FeaturePreviewCard} from "./FeaturePreviewCard.tsx";

export const FeaturePreviewSection = () => {
    const features = [
        {
            title: " Simple & Fast",
            description: "Quickly add and manage tasks without distractions.",
        },
        {
            title: "Stay Focused",
            description: "Prioritize your tasks and focus on what matters most.",
        },
        {
            title: "No Distractions",
            description: "Clean interface keeps you on track all day.",
        },
    ];
    return (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={12}>
            {features.map((f, i) => (
                <FeaturePreviewCard key={i} title={f.title} description={f.description} />
            ))}
        </SimpleGrid>
    );
};

