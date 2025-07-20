"use client"
import React from 'react'
import { easeInOut, motion } from 'framer-motion'

export default function ScrollWrapper({ children, direction = "up", delay = "0" }) {

    let initial = { opacity: 0 };
    if (direction === "left") initial.x = -100;
    if (direction === "right") initial.x = 100;
    if (direction === "up") initial.y = -50;
    if (direction === "down") initial.y = 50;
    if (direction === "fade") initial = { opacity: 0 };

    return (
        <motion.div initial={initial} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay, ease: "easeInOut" }}>
            {children}
        </motion.div>
    )
}

