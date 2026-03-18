import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { Check, Pencil, Trash2 } from "lucide-react";
import type { Task } from "../../../entities/task";
import type { FC } from "react";

/*
 * Props interface describing the data
 * that this component expects.
 */
interface Props {
    // Single task object to display
    task: Task;
}

/*
 * TaskCard component displays a single task
 * with its title, description and action buttons.
 */
const TaskCard: FC<Props> = ({ task }) => {
    return (
        <Box
            w="full" // full width
            p={5} // padding
            bg="gray.800" // background color
            rounded="xl" // rounded corners
            border="1px solid"
            borderColor="whiteAlpha.200"

            position="relative" // required for pseudo element positioning
            overflow="hidden"
            transition="0.25s"

            /*
             * Decorative glowing line at the bottom
             * using a CSS pseudo-element.
             */
            _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "10%",
                width: "80%",
                height: "4px",

                background:
                    "linear-gradient(90deg, transparent, #22c55e, transparent)",

                filter: "blur(1px)"
            }}

            /*
             * Hover effect: slightly lift the card
             * and change background color.
             */
            _hover={{
                bg: "gray.700",
                transform: "translateY(-2px)",
            }}
        >

            {/* Layout container for task info and action buttons */}
            <HStack justify="space-between">

                {/* Task text section */}
                <Box>

                    {/* Task title */}
                    <Text fontWeight="bold" color="white">
                        {task.title}
                    </Text>

                    {/* Task description */}
                    <Text fontSize="sm" color="gray.400">
                        {task.description}
                    </Text>

                </Box>

                {/* Action buttons */}
                <HStack>

                    {/* Edit task button */}
                    <IconButton
                        aria-label="edit"
                        size="sm"
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "white", bg: "gray.600" }}
                    >
                        <Pencil size={16} />
                    </IconButton>

                    {/* Delete task button */}
                    <IconButton
                        aria-label="delete"
                        size="sm"
                        variant="ghost"
                        color="gray.300"
                        _hover={{ color: "red.300", bg: "gray.600" }}
                    >
                        <Trash2 size={16} />
                    </IconButton>

                    {/* Mark task as completed */}
                    <IconButton
                        aria-label="complete"
                        size="sm"
                        variant="ghost"
                        color="green.400"
                        _hover={{ color: "green.300", bg: "gray.600" }}
                    >
                        <Check size={16} />
                    </IconButton>

                </HStack>

            </HStack>
        </Box>
    );
};

export default TaskCard;