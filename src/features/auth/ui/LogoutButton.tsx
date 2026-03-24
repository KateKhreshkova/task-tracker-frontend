import { Button } from "@chakra-ui/react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import {logoutUser} from "../../../entities/user/model/thunks/logoutUser.ts";
import { LogOut } from "lucide-react";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const onClick = async () => {
        dispatch(logoutUser())
    }
    return (
        <Button
            variant="graySecondary"
            size="lg"
            onClick={onClick}
        >
            <LogOut size={16} />
            Log out
        </Button>
    );
};