export default function About() {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-12 text-green-700">
          About <span className="text-red-600">PriFa</span> Coffee
        </h1>
        <img 
          className="w-full rounded-lg shadow-lg mb-12" 
          src="https://prifacoffee.com/wp-content/uploads/2024/09/ALL-PHOTO-FOR-LANDING-PAGES-1-2048x701.png" 
          alt="PriFa Coffee"
        />
        <p className="text-center text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          PriFa Coffee Tablets offer a revolutionary and convenient way to enjoy coffee. Whether you are on a hike, 
          in the office, or simply in need of a quick caffeine boost, PriFa Coffee is your perfect companion.
        </p>
  
        {/* USP Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-green-600 mb-8 text-center">Benefits & Unique Selling Points</h2>
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-8">
            PriFa Coffee combines the rich taste of high-quality coffee with ultimate convenience. No brewing, no waiting—just place 
            a tablet in your mouth and enjoy a smooth caffeine boost anytime, anywhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Ultimate Convenience</h5>
              <p className="text-gray-700">
                Perfect for on-the-go moments. Forget about hot water or brewing—just pop a tablet in your mouth.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Ideal for Busy Lifestyles</h5>
              <p className="text-gray-700">
                Whether you’re a student, professional, or traveler, PriFa Coffee tablets fit seamlessly into your busy routine.
              </p>
            </div>
          </div>
        </section>
  
        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">Target Audience</h2>
          <p className="text-center text-lg text-gray-700 leading-relaxed mb-8">
            PriFa Coffee caters to a diverse range of coffee lovers who value convenience and portability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Busy Professionals</h5>
              <p className="text-gray-700">Perfect for professionals who are always on the move and need a quick, no-mess caffeine solution.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Students</h5>
              <p className="text-gray-700">Ideal for students who need to stay alert during long study sessions or exam preparations.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Travelers</h5>
              <p className="text-gray-700">Portable and easy to use, PriFa Coffee is a great companion for those constantly on the go.</p>
            </div>
          </div>
        </section>
  
        {/* Pain Points */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-red-600 mb-8 text-center">Addressing Common Pain Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">No Time to Brew</h5>
              <p className="text-gray-700">PriFa Coffee tablets provide an instant solution—no need to wait for your coffee to brew.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-gray-900">Midday Fatigue</h5>
              <p className="text-gray-700">A quick caffeine boost to keep you going through the midday slump without the crash.</p>
            </div>
          </div>
        </section>
  
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-600 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-red-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4">No Crash or Jitters</h5>
              <p>Enjoy a smooth energy boost without the typical caffeine crash or jitters.</p>
            </div>
            <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4">Health-Conscious Ingredients</h5>
              <p>Made from high-quality ground coffee and Arabic gum, these tablets are vegan, non-GMO, and gluten-free.</p>
            </div>
            <div className="p-6 bg-brown-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4">Eco-Friendly</h5>
              <p>PriFa Coffee is not only good for you but also for the environment with minimal packaging waste.</p>
            </div>
          </div>
        </section>
  
        {/* Objections */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-600 mb-8 text-center">Addressing Objections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-red-600">Taste</h5>
              <p className="text-gray-700">PriFa Coffee is perfect for those who appreciate a strong, black coffee flavor.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h5 className="font-bold text-xl mb-4 text-red-600">Acidity Sensitivity</h5>
              <p className="text-gray-700">Our tablets provide a natural coffee taste without artificial sweeteners.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  