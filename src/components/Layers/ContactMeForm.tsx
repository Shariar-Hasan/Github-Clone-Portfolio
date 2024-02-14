"use client";
import { contactMeFormPost } from "@/actions/POST";
import Input from "@/components/FormElements/Input";
import TextArea from "@/components/FormElements/TextArea";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
const ContactMeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ContactForm>();
      const onSubmit = handleSubmit(async (data: ContactForm) => {
        console.log({ dataFromBrowser: data });
        try {
          const result = await contactMeFormPost(data);
          if (result.success) {
            toast.success(`Message for ${data.name} sent successfully`);
          } else {
            toast.error(result.data.message);
          }
        } catch (error: any) {
          toast.error(error.message);
        }
      });
    
  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
        <div>
          <Input
            label="Your Name"
            errors={errors}
            name="name"
            register={register("name", {
              required: "Name is required",
            })}
            required
          />
          <Input
            label="Your Email"
            errors={errors}
            name="email"
            register={register("email", {
              required: "Email is required",
              validate: (value: string) =>
                (value.includes("@") && value.includes(".")) || "Invalid email",
            })}
            required
          />
          <TextArea
            label="Your Message"
            errors={errors}
            name="message"
            register={register("message", {
              required: "Message is required",
            })}
            required
          />
          <button
            type="submit"
            className="hover:bg-brand hover:text-white delayed w-full border-dimmed border px-5 py-2 mt-3 cornered"
          >
            Send Message
          </button>
        </div>
        <div className="flex flex-col justify-center items-center px-10 text-center">
          <p className="md:text-lg">
            If you have any <span className="text-brand">questions</span> or
            want <span className="text-brand">to work together</span>, feel free
            to contact me.
          </p>
          <p className="mt-3 md:text-lg">
            I will try to get back to you as soon as possible.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactMeForm;
