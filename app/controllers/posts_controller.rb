class PostsController < ApplicationController
  def index
    @post = Post.new
  end

  def case
  end

  def create
    post = Post.new(post_params)
    if post.save!
      redirect_to final_path
    else
      render :index
    end
  end

  def cbre
  end

  def final
  end

  def list
    @post = Post.all
  end

  private

  def post_params
    params.require(:post).permit(:name, :gender, :echelon, :age,:favorite,:mobile,:email)
  end
end