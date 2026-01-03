export default function MapSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-0 my-10">
      <h2 className="text-center text-xl font-semibold mb-4 ">
  Find Us on Google Maps
</h2>
      <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-sm">
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps?q=Dhruwraj%20Ayurveda&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}