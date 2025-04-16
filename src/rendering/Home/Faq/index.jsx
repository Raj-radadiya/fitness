import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
    {
        question: "Do you offer a free trial?",
        answer: "Yes! We offer a free 3-day trial so you can experience our facility before joining."
    },
    {
        question: "What are your operating hours?",
        answer: "We're open from 5:00 AM to 11:00 PM, Monday to Sunday."
    },
    {
        question: "Are personal trainers available?",
        answer: "Absolutely! Our certified trainers are available for personalized plans."
    },
    {
        question: "Can I cancel my membership anytime?",
        answer: "Yes, you can cancel anytime. Just let us know a week in advance."
    }
];

function FAQSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative">
            {/* Background Effects */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="group bg-gray-800/50 rounded-lg border border-gray-700">
                                    <Disclosure.Button className="flex w-full justify-between items-center p-4 text-left">
                                        <span className="font-medium text-lg text-white">
                                            {faq.question}
                                        </span>
                                        <ChevronUpIcon
                                            className={`${open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-white transition-transform duration-200`}
                                        />
                                    </Disclosure.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-out"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Disclosure.Panel className="p-4 border-t border-gray-700 text-gray-300">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
