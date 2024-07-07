// components/MenuSection.tsx
import CartButton from './CartButton'

const MenuSection = () => (
  <section className="py-20" id="menu">
    <h2 className="text-3xl font-bold text-center mb-10">Our Menu</h2>
    <div className="flex flex-wrap justify-center space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4">
        <img src="/grilled-salmon.png" alt="Grilled Salmon" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">Grilled Salmon</h3>
        <p className="mt-2">Perfectly grilled salmon fillet served with steamed vegetables.</p>
        <CartButton id="grilled-salmon" name="Grilled Salmon" price={14.99} image="/grilled-salmon.png" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4">
        <img src="/caesar-salad.png" alt="Caesar Salad" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">Caesar Salad</h3>
        <p className="mt-2">Crisp romaine lettuce, creamy Caesar dressing, and croutons.</p>
        <CartButton id="caesar-salad" name="Caesar Salad" price={8.99} image="/caesar-salad.png" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4">
        <img src="/margherita-pizza.png" alt="Margherita Pizza" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">Margherita Pizza</h3>
        <p className="mt-2">Fresh tomatoes, mozzarella cheese, fresh basil, salt, and olive oil.</p>
        <CartButton id="margherita-pizza" name="Margherita Pizza" price={10.99} image="/margherita-pizza.png" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs mx-4">
        <img src="/spaghetti-carbonara.png" alt="Spaghetti Carbonara" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">Spaghetti Carbonara</h3>
        <p className="mt-2">Classic Italian pasta with eggs, cheese, pancetta, and pepper.</p>
        <CartButton id="spaghetti-carbonara" name="Spaghetti Carbonara" price={12.99} image="/spaghetti-carbonara.png" />
      </div>
    </div>
  </section>
)

export default MenuSection
