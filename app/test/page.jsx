'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FontsTest() {
  return (
    <div className="p-6 space-y-6 pt-24">
      <h2 className="text-3xl font-bold mb-4">Font Test Page</h2>

      <p className="font-higherjump text-3xl">Higher Jump - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-bebas text-3xl">Bebas Neue - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-heathergreen text-3xl">Heathergreen - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-madetommy text-3xl">Made Tommy - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-merich text-3xl">Merich - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-milker text-3xl">Milker - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-nclneovibes text-3xl">NCL Neovibes - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-rushdriver text-3xl">Rush Driver - The quick brown fox jumps over the lazy dog.</p>
      <p className="font-shocksurgent text-3xl">Shock Surgent - The quick brown fox jumps over the lazy dog.</p>
    </div>
  );
}
