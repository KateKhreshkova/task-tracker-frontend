import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import {CheckIcon, DeleteIcon, EditIcon} from "lucide-react";


const TaskCard = () => {
    return (
        <Box
            w="full"
            p={5}
            bg="gray.800"
            rounded="xl"
            shadow="md"
            _hover={{ bg: "gray.700" }}
            transition="0.2s"
        >
            <HStack justify="space-between">

                <Box>
                    <Text fontWeight="bold" color="white">
                        TODO TITLE
                    </Text>
                    <Text fontSize="sm" color="gray.400">
                        TODO SUB TITLE
                    </Text>
                </Box>

                <HStack>
                    <IconButton aria-label="edit" size="sm" variant="ghost">
                        <EditIcon />
                    </IconButton>

                    <IconButton aria-label="delete" size="sm" variant="ghost">
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="complete" size="sm" variant="ghost" colorPalette="green">
                        <CheckIcon />
                    </IconButton>
                </HStack>

            </HStack>
        </Box>
    );
};
export default TaskCard