import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

type InitialValueProps = {
	currentStep: number;
	setCurrentStep: Dispatch<SetStateAction<number>>;
};

const InitialValues: InitialValueProps = {
	currentStep: 1,
	setCurrentStep: () => undefined,
};

const authContext = createContext(InitialValues);

const { Provider } = authContext;

export const authContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [currentStep, setCurrentStep] = useState(
		InitialValues.currentStep,
	);

	const values = {
		currentStep,
		setCurrentStep,
	};
	return <Provider value={values}>{children}</Provider>;
};

export const AuthContextProvider = () => {
	const state = useContext(authContext);

	return state;
};
