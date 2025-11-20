import CircleProgress from "./components/CircleProgress";
import CardContainer from "./components/CardContainer";

export default function HomePage() {
  return (
    <main className="min-h-screen p-6 md:p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Pedometer Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your daily steps and activity
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Steps Progress Card */}
          <CardContainer
            title="Daily Steps"
            icon="👣"
            className="lg:col-span-1"
          >
            <div className="flex flex-col items-center justify-center">
              <CircleProgress />
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Goal: 10,000 steps
              </p>
            </div>
          </CardContainer>

          {/* Steps Count Card */}
          <CardContainer title="Total Steps" icon="📊">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                6,000
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Steps today
              </p>
            </div>
          </CardContainer>

          {/* Distance Card */}
          <CardContainer title="Distance" icon="📍">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                4.2
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Kilometers
              </p>
            </div>
          </CardContainer>

          {/* Calories Card */}
          <CardContainer title="Calories Burned" icon="🔥">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                240
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">kcal</p>
            </div>
          </CardContainer>

          {/* Active Time Card */}
          <CardContainer title="Active Time" icon="⏱️">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                45
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Minutes
              </p>
            </div>
          </CardContainer>

          {/* Weekly Summary Card */}
          <CardContainer
            title="Weekly Summary"
            icon="📈"
            className="lg:col-span-3"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Monday
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  8,500
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tuesday
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  9,200
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Wednesday
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  7,800
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Today
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  6,000
                </span>
              </div>
            </div>
          </CardContainer>
        </div>
      </div>
    </main>
  );
}
