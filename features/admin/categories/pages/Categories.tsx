'use client'

import { Button } from "@/components/ui/button"
import { useGetAllCategory } from "../hooks/useGetAllCategory"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

export default function Categories() {
    const { data: categories, isLoading } = useGetAllCategory();

    return (
        <div className="mt-4">
            <Link href="/dashboard/admin/categories/create">
                <Button>
                    <PlusIcon />
                    Create Category
                </Button>
            </Link>
            <div className="mt-4">
                {isLoading ? (
                    <p>Loading...</p>
                ) : categories && categories.length > 0 ? (
                    <Card>
                        <CardContent>
                            <Table>
                                <TableCaption>Categories</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>No</TableHead>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {categories.map((category, index) => (
                                        <TableRow key={category.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{category.name}</TableCell>
                                            <TableCell>{category.description}</TableCell>
                                            <TableCell>
                                                <Link href={`/dashboard/admin/categories/${category.id}`}>
                                                    Edit
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                ) : (
                    <p>No categories found.</p>
                )}
            </div>
        </div>
    )
}