import mongoose, { Schema, Document } from 'mongoose';

export interface ICaseStudy extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: {
    problemStatement: string;
    targetUsers: string;
    painPoints: string;
    solution: string;
    features: string[];
    userFlow: string;
    metrics: string;
    tradeOffs: string;
  };
  tags: string[];
  imageUrl?: string;
  readingTime: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CaseStudySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: {
      problemStatement: { type: String, required: true },
      targetUsers: { type: String, required: true },
      painPoints: { type: String, required: true },
      solution: { type: String, required: true },
      features: [{ type: String }],
      userFlow: { type: String },
      metrics: { type: String },
      tradeOffs: { type: String },
    },
    tags: [{ type: String }],
    imageUrl: { type: String },
    readingTime: { type: String },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.CaseStudy || mongoose.model<ICaseStudy>('CaseStudy', CaseStudySchema);
