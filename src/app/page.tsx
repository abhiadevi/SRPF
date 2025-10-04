import Image from "next/image";

export default function ReleasePage() {
  return (
    <main className="min-h-screen bg-white flex items-start justify-center px-5 pt-[50px] pb-[50px]">
      <div className="text-center md:text-left flex flex-col items-center">
        <Image
          src="/shoflr-logo.svg"
          alt="Shoflr Logo"
          width={150}
          height={40}
          className="w-[3.75rem] h-auto"
        />
        <div className="flex items-center gap-x-2 mt-[20px]">
          <div className="border-3 border-[#2B4C7E] rounded-[15px] px-1.5 py-0 text-[20px] font-bold text-[#2B4C7E] font-manrope inline-flex items-center justify-center">
            2026
          </div>
          <p className="text-[20px] font-semibold font-manrope text-black">
            January release
          </p>
        </div>
        <h1 className="mt-[20px] text-black font-medium font-manrope text-center leading-[1.2] text-[45px]">
          <span className="block">Now you can</span>
          <span className="block">do more with</span>
          <span className="block text-[#2B4C7E]">Shoflr</span>
        </h1>
        <p className="mt-5 text-center max-w-xl font-manrope text-[15px] text-gray-500 leading-[1.35] font-normal">
          Artificial Intelligence that works for you.<br />
          Available worldwide — January 2026.
        </p>
        <div className="mt-10">
          <Image
            src="/hero-image.png"
            alt="Shoflr hero image"
            width={1200}
            height={800}
            className="rounded-xl"
          />
        </div>
        <h2 className="mt-10 font-manrope font-normal text-black text-center text-[20px]">
          Stay ahead of the launch.
        </h2>
        <p className="mt-5 font-manrope font-normal text-[15px] text-gray-500 text-center max-w-xl leading-[1.3]">
          Get early access to updates,<br />
          feature announcements, and exclusive<br />
          launch-day offers.
        </p>
        <p className="mt-5 font-manrope font-normal text-sm text-gray-500 text-center max-w-xl">
          <span className="text-black">* Please note:</span> We're not currently collecting<br />
          emails as we're still in development.<br />
          Once we're ready, we'll share updates here<br />
          — thank you for your patience and interest!
        </p>
        <div className="mt-10 w-[250px] h-[50px] rounded-[15px] border border-black flex items-center justify-center text-base font-manrope text-gray-500">
          example@email.com
        </div>
        <div className="mt-5 w-[250px] h-[50px] rounded-[50px] bg-[#2B4C7E] relative z-10 flex items-center justify-center text-black text-[15px] font-manrope font-normal border border-black">
          Join the wait-list
        </div>
        <p className="mt-10 font-manrope text-[10px] text-gray-500 text-center max-w-lg">
          By joining the wait-list, you agree to receive email<br />
          communications from us related to our website launch and<br />
          updates. We respect your privacy. You can unsubscribe at any<br />
          time. View our Privacy Policy.
        </p>
        <h2 className="mt-15 font-manrope font-normal text-black text-center text-[20px]">
          Your questions, answered
        </h2>
        <div className="w-full max-w-4xl mt-5">
          <p className="text-left font-manrope font-normal text-[15px] text-black pl-5">
            Release notice:
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            The projected release date of January 2026 is an estimated timeline and may be subject to change. While we're working hard to meet this goal, unforeseen delays are always a possibility.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            If any changes occur, updates will be posted on our website, Instagram [@shoflr] and communicated via email to those who have subscribed to our wait-list.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-black font-normal text-left">
            Investment and partnership:
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            We are open to welcoming interest from individuals or organisations seeking to collaborate with or invest in our venture.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            This includes, but is not limited to, opportunities in angel investment, venture capital, crowdfunding, or strategic partnerships.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            If you are interested in working with us, please contact us via Instagram [@shoflr], and a member of our team will get in touch with you directly.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-black font-normal text-left">
            Careers:
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            If you're passionate about Artificial Intelligence and interested in joining our team, we'd love to hear from you.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[15px] text-gray-500 font-normal text-left">
            For career inquiries, please message us on Instagram [@shoflr], and someone from our hiring team will follow up with more information.
          </p>
          <p className="mt-15 pl-5 pr-5 font-manrope text-[10px] text-gray-500 font-normal text-center">
            © [2025] [Shoflr]. All rights reserved.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[10px] text-gray-500 font-normal text-center">
            All content, designs, text, graphics, logos, and other materials on this website are the intellectual property of [Shoflr] and are protected by copyright laws worldwide. Unauthorised use, reproduction, or distribution of any materials without prior written permission is strictly prohibited.
          </p>
          <p className="mt-5 pl-5 pr-5 font-manrope text-[10px] text-gray-500 font-normal text-center">
            We are proud to partner with [Adevi's Children Foundation], a charitable organisation dedicated to empowering children around the world by providing equal access to opportunities, education, and support. As part of our commitment to making a positive impact, a portion of our profits is donated to support their vital work and initiatives.
          </p>
        </div>
      </div>
    </main>
  );
}
