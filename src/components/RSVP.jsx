import { useState, useEffect } from "react";
import VintageFrameBorder from "../assets/vintage_frame_set_16.png";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [drink, setDrink] = useState("");
  const [notes, setNotes] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "26fafbb4-17f4-44ec-ab7f-b7014092f2e0",
          subject: `New Wedding RSVP from ${name}`,
          name: name,
          attending: attendance,
          drink: attendance === "yes" ? drink : "N/A",
          message: notes || "No message provided"
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function for radio button styling
  const getRadioLabelClass = (isChecked) => `
    flex w-full cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition-all
    ${isChecked 
      ? "border-amber-100 bg-amber-100/20" 
      : "border-amber-100/40 bg-black/40 hover:border-amber-100/80"
    }
  `;

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6 py-12 text-amber-100 font-[EB_Garamond]">
      <div className="max-w-3xl w-full flex items-center justify-center flex-col text-center">
        <h1 className="mb-4 text-4xl text-center pl-2 uppercase tracking-[0.25em]">RSVP</h1>

        <div className="bg-amber-100 opacity-80 w-[20rem] h-[6rem]"
          style={{
              WebkitMaskImage: `url(${VintageFrameBorder})`,
              maskImage: `url(${VintageFrameBorder})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat'
          }}
        />

        {isSubmitted ? (
          <div className="space-y-4 mb-3 md:w-[30rem] w-full py-10">
            <h2 className="text-2xl uppercase tracking-[0.2em] text-amber-100/90">
              Thank you for your RSVP
            </h2>
            <p className="text-xl italic text-amber-100/80">
              {attendance === "yes" ? "We can't wait to see you there!" : "You will be missed!"}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mb-3 md:w-[30rem] w-full text-left">
            
            {/* Name Field */}
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-amber-100/80 text-center">Name *</span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your full name"
                required
                className="w-full rounded-3xl border border-amber-100/40 bg-black/70 px-4 py-3 text-amber-100 outline-none transition focus:border-amber-100"
              />
            </label>

            {/* Attendance Field */}
            <fieldset className="rounded-3xl border border-amber-100/40 p-4">
              <legend className="px-2 text-sm uppercase tracking-[0.2em] text-amber-100/80 text-center">Will you be joining us? *</legend>
              <div className="mt-3 flex flex-col sm:flex-row gap-3 text-amber-100">
                <label className={getRadioLabelClass(attendance === "yes")}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === "yes"}
                    onChange={(event) => setAttendance(event.target.value)}
                    required
                    className="h-4 w-4 accent-amber-100"
                  />
                  Joyfully Accept
                </label>
                <label className={getRadioLabelClass(attendance === "no")}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === "no"}
                    onChange={(event) => setAttendance(event.target.value)}
                    required
                    className="h-4 w-4 accent-amber-100"
                  />
                  Regretfully Decline
                </label>
              </div>
            </fieldset>

            {/* Drink Field (Only show if attending) */}
            {attendance !== "no" && (
              <fieldset className="rounded-3xl border border-amber-100/40 p-4 transition-all">
                <legend className="px-2 text-sm uppercase tracking-[0.2em] text-amber-100/80 text-center">Pick your poison *</legend>
                <div className="mt-3 flex flex-col gap-3 text-amber-100">
                  <label className={getRadioLabelClass(drink === "espresso-martini")}>
                    <input
                      type="radio"
                      name="drink"
                      value="espresso-martini"
                      checked={drink === "espresso-martini"}
                      onChange={(event) => setDrink(event.target.value)}
                      required={attendance !== "no"}
                      className="h-4 w-4 accent-amber-100"
                    />
                    Espresso Martini
                  </label>
                  <label className={getRadioLabelClass(drink === "aperol-spritz")}>
                    <input
                      type="radio"
                      name="drink"
                      value="aperol-spritz"
                      checked={drink === "aperol-spritz"}
                      onChange={(event) => setDrink(event.target.value)}
                      required={attendance !== "no"}
                      className="h-4 w-4 accent-amber-100"
                    />
                    Aperol Spritz
                  </label>
                  <label className={getRadioLabelClass(drink === "none")}>
                    <input
                      type="radio"
                      name="drink"
                      value="none"
                      checked={drink === "none"}
                      onChange={(event) => setDrink(event.target.value)}
                      required={attendance !== "no"}
                      className="h-4 w-4 accent-amber-100"
                    />
                    None
                  </label>
                </div>
              </fieldset>
            )}

            {/* Message Field */}
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-amber-100/80 text-center">Message</span>
              <textarea
                name="message"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder={attendance === "no" ? "Leave a message for the couple" : "Any dietary requests or notes"}
                className="h-40 w-full rounded-3xl border border-amber-100/40 bg-black/70 px-4 py-3 text-amber-100 outline-none transition focus:border-amber-100 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full !bg-amber-100 px-6 py-3 text-red-950 font-semibold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit RSVP"}
            </button>
          </form>
        )}

        <div className="bg-amber-100 opacity-80 w-[20rem] h-[6rem] rotate-180"
          style={{
              WebkitMaskImage: `url(${VintageFrameBorder})`,
              maskImage: `url(${VintageFrameBorder})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat'
          }}
        />
      </div>
    </main>
  );
}