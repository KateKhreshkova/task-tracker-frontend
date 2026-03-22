import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
    base: {
        borderRadius: "12px",
        fontWeight: "600",
        height: { base: "48px", md: "56px" }, // responsive height
        width: "100%", // fill parent container
        transition: "all 0.2s ease",
        fontSize: { base: "16px", md: "18px" }, // responsive font size
        letterSpacing: "0.5px",
    },

    variants: {
        variant: {
            greenPrimary: {
                bg: "#349357",
                bgGradient: "linear(to-r, #5E976F, #589F68)",
                color: "white",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                _hover: {
                    bgGradient: "linear(to-r, #66D6A5, #42B884)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                },
                _active: {
                    transform: "translateY(0px)",
                },
            },

            graySecondary: {
                bg: "#555C66",
                color: "white",
                boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                _hover: {
                    bgGradient: "linear(to-r, #66D6A5, #42B884)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                },
                _active: {
                    transform: "translateY(0px)",
                },
            },
        },
    },

    defaultVariants: {
        variant: "greenPrimary",
    },
})