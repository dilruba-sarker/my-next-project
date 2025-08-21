import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function DetailPage({ params }) {
  const { id } = params;

  // MongoDB connect
  const client = await clientPromise;
  const db = client.db("myshop"); // এখানে তোমার DB নাম দাও

  // Single product fetch
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div>❌ Product not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
    </div>
  );
}
