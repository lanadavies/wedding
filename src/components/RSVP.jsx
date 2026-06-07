import { useState } from "react";
import VintageFrameBorder from "../assets/vintage_frame_set_16.png";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6 py-12 text-amber-100 font-[EB_Garamond]">
      <div className="max-w-3xl w-full flex items-center justify-center flex-col text-center">
        <h1 className="mb-4 text-4xl uppercase tracking-[0.25em]">RSVP</h1>
        <p className="mb-8 text-lg leading-relaxed text-amber-100/90">
          Please let us know if you can join our celebration. Your reply helps us plan food, seating, and a beautiful day together.
        </p>
                <div className="bg-amber-100 opacity-80 w-[20rem] h-[6rem]"
                            style={{
                                WebkitMaskImage: `url(${VintageFrameBorder})`,
                                maskImage: `url(${VintageFrameBorder})`,
                                maskSize: 'contain',
                                maskRepeat: 'no-repeat'
                            }}
                        />
        <form className="space-y-6 w-[30rem]">
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-amber-100/80">Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your full name"
              className="w-full rounded-3xl border border-amber-100/40 bg-black/70 px-4 py-3 text-amber-100 outline-none transition focus:border-amber-100"
            />
          </label>

          <fieldset className="rounded-3xl border border-amber-100/40 p-4">
            <legend className="px-2 text-sm uppercase tracking-[0.2em] text-amber-100/80">Will you attend?</legend>
            <div className="mt-3 flex flex-col gap-3 text-amber-100">
              <label className="inline-flex items-center gap-3">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={attending === "yes"}
                  onChange={(event) => setAttending(event.target.value)}
                  className="h-4 w-4 accent-amber-100"
                />
                Yes, happily attending
              </label>
              <label className="inline-flex items-center gap-3">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={attending === "no"}
                  onChange={(event) => setAttending(event.target.value)}
                  className="h-4 w-4 accent-amber-100"
                />
                Sorry, cannot attend
              </label>
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-amber-100/80">Message</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Any dietary requests or notes"
              className="h-40 w-full rounded-3xl border border-amber-100/40 bg-black/70 px-4 py-3 text-amber-100 outline-none transition focus:border-amber-100"
            />
          </label>

          <button
            type="button"
            className="w-full rounded-full border border-amber-100 bg-amber-100/10 px-6 py-3 text-amber-100 transition hover:bg-amber-100 hover:text-black"
          >
            Submit RSVP
          </button>
        </form>
                        <div className="bg-amber-100 opacity-80 w-[20rem] h-[6rem]"
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
