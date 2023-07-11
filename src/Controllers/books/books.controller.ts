import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getAllBooks(): string {
    return 'Todos os livros';
  }
  @Post()
  saveBook(): string {
    return 'livro salvo';
  }
  @Patch()
  updateBook(): string {
    return 'livro atualizado';
  }
  @Delete()
  deleteBook(): string {
    return 'livro excluido';
  }
}
