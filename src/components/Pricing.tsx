import { useState } from "react";
import { usePaystackPayment } from "react-paystack";

const publicKey = "pk_test_54f6438b361b34bb7219ffd6b027d58935caa774";

type EventItem = {
  // This represents an event that can be booked
  id: number;
  name: string;
  price: number;
};

type CartItem = EventItem & {
  quantity: number;
};

const events: EventItem[] = [
  // Sample events with prices
  { id: 1, name: "Afrobeats Live Concert", price: 50000 },
  { id: 2, name: "Tech Meetup Lagos", price: 20000 },
  { id: 3, name: "Startup Pitch Night", price: 35000 },
  { id: 4, name: "Comedy Night Special", price: 15000 },
];

const Pricing = () => {
  const [cart, setCart] = useState<CartItem[]>([]); // Cart state to hold selected events and their quantities
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const addToCart = (event: EventItem) => {
    // Adds an event to the cart or increases quantity if it already exists
    setCart((prev) => {
      const existing = prev.find((item) => item.id === event.id);

      if (existing) {
        return prev.map((item) =>
          item.id === event.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...event, quantity: 1 }];
    });
  };

  const increaseQty = (id: number) => {
    // Increases the quantity of a specific event in the cart
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    // Decreases the quantity of a specific event in the cart or removes it if quantity reaches 0
    setCart(
      (
        prev, // Decreases the quantity of a specific event in the cart or removes it if quantity reaches 0
      ) =>
        prev
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          )
          .filter((item) => item.quantity > 0),
    );
  };

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const initializePayment = usePaystackPayment({
    publicKey,
    email: "adeyelejotham@gmail.com.com", // replace with real user email later
    amount: getTotal() * 100, // Paystack uses kobo (NGN * 100)
    currency: "NGN",
  });

  return (
    <section id="pricing" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Event Tickets & Pricing
          </h2>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Choose your events and build your experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Event List */}
          <div className="md:col-span-2 grid gap-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-5 rounded-2xl border border-gray-100 hover:shadow-sm transition"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{event.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₦{event.price} per ticket
                  </p>
                </div>

                <button
                  onClick={() => addToCart(event)}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Cart */}
          <div className="p-6 rounded-2xl border border-gray-100 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Your Cart
            </h3>

            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">No tickets added yet.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        ₦{item.price} x {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 border rounded-md"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 border rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold">Total: ₦{getTotal()}</p>

                  <button
                    onClick={() =>
                      initializePayment({
                        onSuccess: () => {
                          setModalMessage(
                            "Payment successful 🎉 Your booking is confirmed.",
                          );
                          setShowModal(true);
                          setCart([]);
                        },
                        onClose: () => {
                          setModalMessage(
                            "Payment was cancelled ❌ You can try again anytime.",
                          );
                          setShowModal(true);
                        },
                      })
                    }
                    className="mt-4 w-full bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800 transition"
                  >
                    Checkout with Paystack
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-lg animate-fadeIn">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-center text-gray-900 font-semibold text-lg">
              {modalMessage}
            </h2>

            <p className="text-center text-sm text-gray-500 mt-2">Eventify</p>

            {/* Button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
