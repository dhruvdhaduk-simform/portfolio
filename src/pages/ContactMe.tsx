import { useState } from 'react';
import { PageHeading } from '@/components/PageHeading';
import {
    validateName,
    validateEmail,
    validateMessage,
} from '@/utils/validations';

export function ContactMe() {
    // States to keep track of user inputs.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Boolean flag for each input field. Set to true when input touched.
    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isMessageTouched, setIsMessageTouched] = useState(false);

    // Errors for each input field.
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (nameError || emailError || messageError) return;
    };

    return (
        <div className="w-full flex flex-col justify-center gap-8 pb-24">
            <PageHeading title="Contact Me" />

            <div>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-96 flex flex-col gap-4"
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-[15px]">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                                setIsNameTouched(true);
                            }}
                            placeholder="Enter Your Name"
                            className={`border border-gray h-10 rounded-lg pl-3 ${isNameTouched && nameError ? 'focus:outline-none focus:border-red-500' : ''}`}
                        />
                        <span className="text-sm text-red-500">
                            {isNameTouched && nameError}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-[15px]">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.currentTarget.value);
                                setIsEmailTouched(true);
                            }}
                            placeholder="Enter Your Email"
                            className={`border border-gray h-10 rounded-lg pl-3 ${isEmailTouched && emailError ? 'focus:outline-none focus:border-red-500' : ''}`}
                        />
                        <span className="text-sm text-red-500">
                            {isEmailTouched && emailError}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-[15px]">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            value={message}
                            onChange={(e) => {
                                setMessage(e.currentTarget.value);
                                setIsMessageTouched(true);
                            }}
                            placeholder="How can I help ?"
                            className={`border border-gray rounded-lg p-3 min-h-36 ${isMessageTouched && messageError ? 'focus:outline-none focus:border-red-500' : ''}`}
                        ></textarea>
                        <span className="text-sm text-red-500">
                            {isMessageTouched && messageError}
                        </span>
                    </div>
                    <button
                        disabled={Boolean(
                            nameError || emailError || messageError
                        )}
                        className="bg-white text-black w-fit py-2 px-6 font-bold rounded-lg not-disabled:cursor-pointer not-disabled:hover:scale-105 duration-200 disabled:opacity-70"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
