import { defineRecipe } from "@chakra-ui/react";


export const buttonRecipe = defineRecipe({
    base: {
        borderRadius: "14px",
        fontWeight: "600",
        height: { base: "50px", md: "56px" },
        fontSize: { base: "16px", md: "17px" },
        letterSpacing: "0.3px",
        transition: "all 0.25s ease",
    },

    variants: {
        variant: {
            // 🔥 PRIMARY (главная кнопка)
            greenPrimary: {
                bg: "linear-gradient(135deg, #4ADE80, #22C55E)", // ✅ ВАЖНО
                color: "gray.900",
                boxShadow: "0 8px 25px rgba(34,197,94,0.25)",

                _hover: {
                    bg: "linear-gradient(135deg, #6EE7A8, #16A34A)",
                    transform: "translateY(-2px) scale(1.02)",
                    boxShadow: "0 12px 30px rgba(34,197,94,0.35)",
                },

                _active: {
                    transform: "scale(0.98)",
                },
            },

            // 🔥 SECONDARY (стеклянная / outline)
            graySecondary: {
                bg: "whiteAlpha.100",
                color: "white",
                border: "1px solid",
                borderColor: "whiteAlpha.300",
                backdropFilter: "blur(10px)",

                _hover: {
                    bg: "whiteAlpha.200",
                    borderColor: "whiteAlpha.500",
                    transform: "translateY(-2px)",
                },

                _active: {
                    transform: "scale(0.98)",
                },
            },
        },
    },

    defaultVariants: {
        variant: "greenPrimary",
    },
});