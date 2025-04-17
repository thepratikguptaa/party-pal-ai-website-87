
interface ProgressStepsProps {
  currentStep: number;
}

export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <div className="flex items-center mb-10">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep >= 1 ? "bg-party-500 text-white" : "bg-gray-200 text-gray-600"
        }`}>
          1
        </div>
        <span className="ml-2 font-medium">Event Type</span>
      </div>
      <div className={`h-px w-16 mx-4 ${currentStep >= 2 ? "bg-party-500" : "bg-gray-200"}`} />
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep >= 2 ? "bg-party-500 text-white" : "bg-gray-200 text-gray-600"
        }`}>
          2
        </div>
        <span className="ml-2 font-medium">Basic Details</span>
      </div>
      <div className="h-px w-16 mx-4 bg-gray-200" />
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
          3
        </div>
        <span className="ml-2 font-medium">AI Setup</span>
      </div>
    </div>
  );
}
